import Image from "next/image";
import Content from "../components/home/content";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <section className="flex mt-[100px]">
        <div className="w-[20%]"></div>
        <div className="w-[80%]">
          <h1>Home</h1>
          <Link href={"/about"} className="underline">
            Go To About
          </Link>
        </div>
      </section>
    </section>
  );
}
