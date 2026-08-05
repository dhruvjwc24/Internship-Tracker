import { getPostings } from "@/lib/postings";
import PostingCard from "@/components/PostingCard";

export default function Home() {
  const data = getPostings();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-4 py-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Internship Digest
        </h1>
        <p className="text-sm text-black/60 dark:text-white/60">
          Internship postings extracted from{" "}
          <a
            href={data.source_account.profile_url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            @{data.source_account.username}
          </a>
          &apos;s Instagram Stories, so nothing gets missed once they expire.
        </p>
      </header>

      {data.postings.length === 0 ? (
        <p className="rounded-lg border border-dashed border-black/15 p-6 text-center text-sm text-black/50 dark:border-white/15 dark:text-white/50">
          No postings extracted yet — check back soon.
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {data.postings.map((posting) => (
            <PostingCard key={posting.id} posting={posting} />
          ))}
        </div>
      )}

      {data.generated_at && (
        <footer className="pt-4 text-center text-xs text-black/40 dark:text-white/40">
          Last updated {new Date(data.generated_at).toLocaleString()}
        </footer>
      )}
    </main>
  );
}
