# Agent notes

## Plans & audits

- Site improvement backlog: [plan/audit.md](plan/audit.md)

## Don't do

- Contact form: do not auto-close the modal after a successful send (and do not add a “Done” control that only closes). Leave the success message visible until the user closes the dialog themselves.
- Lint in CI: do not add CI that runs `npm run lint` (or other lint jobs). Lint stays local only.
- Projects without logos: do not add logos for Litiges / mobile-number projects, and do not collapse the empty image column to “fix” uneven cards.
- Unused `links.js` entries: do not remove `lingui`, `translationio`, `perl`, or `sentry` just because they are unused as `{…}` placeholders.
- Web3Forms key in `.env.example`: do not scrub or rotate it; the access key is a public client-side key (restrict by domain in the Web3Forms dashboard if needed).

## Design

- Link colors: see [.cursor/rules/link-colors.mdc](.cursor/rules/link-colors.mdc)
