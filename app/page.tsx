"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/ja");
  }, [router]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-24">
      <p>Redirecting to Japanese…</p>
      <p>
        If you are not redirected,{" "}
        <Link className="underline" href="/ja">
          click here
        </Link>
        .
      </p>
    </main>
  );
}
