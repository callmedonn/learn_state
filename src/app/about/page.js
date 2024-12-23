"use client";

import Link from "next/link";

export default function page() {
  return (
    <section>
      <section className="flex mt-[100px]">
        <div className="w-[20%]"></div>
        <div className="w-[80%]">
          <h1>About</h1>
          <Link href={"/"} className="underline">
            Go To Home
          </Link>
        </div>
      </section>
    </section>
  );
}
