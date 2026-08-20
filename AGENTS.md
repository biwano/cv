# Agent notes

## Plans & audits

- Site improvement backlog: [plan/audit.md](plan/audit.md)

## Don't do

- Contact form: do not auto-close the modal after a successful send (and do not add a “Done” control that only closes). Leave the success message visible until the user closes the dialog themselves.
- Lint in CI: do not add CI that runs `npm run lint` (or other lint jobs). Lint stays local only.

## Design

- Link colors: see [.cursor/rules/link-colors.mdc](.cursor/rules/link-colors.mdc)
