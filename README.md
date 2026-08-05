# Internship Digest

An unofficial, fan-run digest of internship postings shared by
[@zero2sudo](https://instagram.com/zero2sudo) on Instagram Stories. Since
Stories disappear after 24 hours, this pulls out just the factual details
(company, role, application link, deadline) so they're easy to check
without scrolling through Instagram.

## What this is — and isn't

- **Not affiliated with, endorsed by, or operated by @zero2sudo or
  Instagram.** This is an independent personal project.
- **Only extracted facts are published — never the original screenshots or
  videos.** Company names, roles, deadlines, and public application links
  aren't @zero2sudo's copyrightable creative work; the graphics themselves
  are, and are deliberately never reproduced here.
- Every entry on the site links back to
  [@zero2sudo's Instagram profile](https://instagram.com/zero2sudo) —
  please go follow them there for the original content.

## Takedown requests

If you're @zero2sudo (or represent them) and want any entry — or this
whole site — taken down, email **dhruvjwc@gmail.com** with the entry or
company name. It'll be removed promptly, no legal process needed.

## How it's updated

Data comes from `data/postings.json`, regenerated and committed by a
separate private pipeline (not part of this repo) that periodically checks
for new Stories, extracts posting info from any that are internship-related
via an AI vision model, and pushes an update here. Every push triggers a
fresh Vercel deployment automatically.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
