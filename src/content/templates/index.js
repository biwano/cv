import position from "./position";
import education from "./education";
import profile from "./profile";
import project from "./project";
import page_summary from "./page_summary";
import page_skill from "./page_skill";
import skill from "./skill";

var templates = Object.assign(
  {},
  page_summary,
  page_skill,
  position,
  profile,
  skill,
  education,
  project
);

export default templates;
