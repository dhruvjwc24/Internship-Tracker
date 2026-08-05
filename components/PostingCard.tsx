import type { Posting } from "@/lib/postings";

export default function PostingCard({ posting }: { posting: Posting }) {
  return (
    <article className="flex flex-col gap-2 rounded-lg border border-black/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-black dark:text-white">
            {posting.company ?? "Company not specified"}
          </h2>
          {posting.role && (
            <p className="text-sm text-black/70 dark:text-white/70">
              {posting.role}
            </p>
          )}
        </div>
        {posting.link && (
          <a
            href={posting.link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-md bg-black px-3 py-1.5 text-sm font-medium text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
          >
            Apply →
          </a>
        )}
      </div>

      {posting.deadline_or_cycle && (
        <p className="text-sm text-black/60 dark:text-white/60">
          {posting.deadline_or_cycle}
        </p>
      )}

      {posting.confidence_notes && (
        <p className="text-xs italic text-black/40 dark:text-white/40">
          Note: {posting.confidence_notes}
        </p>
      )}

      <div className="mt-1 flex items-center justify-between text-xs text-black/40 dark:text-white/40">
        <span>{posting.date_posted ?? ""}</span>
        <a
          href={posting.credit.profile_url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-black/70 dark:hover:text-white/70"
        >
          via @{posting.credit.name}
        </a>
      </div>
    </article>
  );
}
