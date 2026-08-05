import fs from "fs";
import path from "path";

export interface Credit {
  name: string;
  profile_url: string;
}

export interface Posting {
  id: string;
  company: string | null;
  role: string | null;
  link: string | null;
  deadline_or_cycle: string | null;
  date_posted: string | null;
  confidence_notes: string | null;
  credit: Credit;
}

export interface PostingsData {
  generated_at: string | null;
  source_account: {
    username: string;
    profile_url: string;
  };
  postings: Posting[];
}

// Read at build/render time — this file is only ever updated by
// scripts/publish_digest.py committing+pushing a new version, which is
// exactly when Vercel rebuilds anyway. No API route, no client fetch,
// no loading state needed.
export function getPostings(): PostingsData {
  const filePath = path.join(process.cwd(), "data", "postings.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as PostingsData;
}
