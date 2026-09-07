// Vercel serverless entrypoint.
//
// This used to be a separate, hand-duplicated copy of the API (with email
// notifications disabled — see index.ts.bak). That duplicate had drifted out
// of sync with the real app in ../src, so we now just re-export the real,
// fully wired Express app (routes + booking email notifications) instead of
// maintaining two copies.
export { default } from "../src/app";
