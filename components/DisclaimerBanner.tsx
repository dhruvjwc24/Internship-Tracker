const TAKEDOWN_EMAIL = "dhruvjwc@gmail.com";

export default function DisclaimerBanner() {
  return (
    <div className="border-b border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-200">
      <div className="mx-auto max-w-3xl">
        <p>
          <strong>Unofficial, fan-run digest.</strong> Not affiliated with,
          endorsed by, or operated by{" "}
          <a
            href="https://instagram.com/zero2sudo"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-amber-700 dark:hover:text-amber-100"
          >
            @zero2sudo
          </a>{" "}
          or Instagram. Only factual details (company, role, link, deadline)
          are reproduced here — the original graphics/images are never
          republished.{" "}
          <a
            href={`mailto:${TAKEDOWN_EMAIL}?subject=Removal request`}
            className="underline underline-offset-2 hover:text-amber-700 dark:hover:text-amber-100"
          >
            Request removal of any entry or this whole site →
          </a>
        </p>
      </div>
    </div>
  );
}
