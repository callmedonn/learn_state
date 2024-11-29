import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <section className="flex mt-[100px]">
        <div className="w-[20%]"></div>
        <div className="w-[80%]">
          <h1>Halaman Tidak ada</h1>
          <Link href={"/"} className="underline">
            Kembali ke Home
          </Link>
        </div>
      </section>
    </section>
  );
}
