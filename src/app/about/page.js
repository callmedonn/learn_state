"use client";

import Link from "next/link";
import { useGlobalState } from "../../utils/globalState";

export default function page() {
  const { globalState, setGlobalState } = useGlobalState();
  return (
    <section className="flex mt-[100px]">
      <div className="w-[20%]"></div>
      <div className="w-[80%]">
        <div className="grid grid-cols-5 gap-4 py-2"></div>
        <div className="bg-blue-100">
          <h1>About</h1>
          <Link href="/"> Go To Home</Link>
        </div>
        <div className="bg-gray-500 mt-6">
          <button onClick={() => setGlobalState("isDark")}>
            Ubah Nilai Global State
          </button>
          <div>
            <p>Nilai Global State: {globalState}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
