import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";
import { paths } from "./config.mjs";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".css": "text/css",
  ".js": "text/javascript",
};

function contentType(filePath) {
  return MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream";
}

function startStaticServer(rootDir) {
  const root = fileURLToPath(rootDir);
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
      const safe = path.normalize(urlPath).replace(/^(\.\.[/\\])+/, "");
      const filePath = path.join(root, safe === path.sep ? "" : safe);
      if (!filePath.startsWith(root)) {
        res.writeHead(403);
        res.end("Forbidden");
        return;
      }
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end("Not found");
          return;
        }
        res.writeHead(200, { "Content-Type": contentType(filePath) });
        res.end(data);
      });
    });
    server.listen(0, "127.0.0.1", () => {
      const { port } = server.address();
      resolve({
        port,
        close: () => new Promise((r) => server.close(r)),
      });
    });
  });
}

/**
 * @param {{ htmlFile: string, pdfFile: string }[]} targets
 */
export async function writePdfs(targets) {
  const server = await startStaticServer(paths.publicDir);
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    for (const { htmlFile, pdfFile } of targets) {
      const page = await browser.newPage();
      await page.goto(`http://127.0.0.1:${server.port}/${htmlFile}`, {
        waitUntil: "networkidle0",
      });
      const outPath = fileURLToPath(new URL(pdfFile, paths.publicDir));
      await page.pdf({
        path: outPath,
        format: "A4",
        printBackground: true,
        preferCSSPageSize: true,
        margin: { top: "0", right: "0", bottom: "0", left: "0" },
      });
      await page.close();
      console.log(`wrote public/${pdfFile}`);
    }
  } finally {
    await browser.close();
    await server.close();
  }
}
