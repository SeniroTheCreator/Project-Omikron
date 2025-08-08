# Omikron Logistics

Minimal logistics MVP built with Next.js 15, TypeScript and Tailwind CSS.

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Test

```bash
npm test
```

## Adding a Service

Add a new entry to [`src/data/services.ts`](src/data/services.ts). Each object requires a `title` and `description`. The Services page will render a card automatically.

## Wiring a Real Email Sender

The contact form currently logs submissions in [`src/app/contact/actions.ts`](src/app/contact/actions.ts). Replace the `console.log` with an email sending library or API call (e.g., Nodemailer, Resend). Ensure credentials are stored as environment variables.
