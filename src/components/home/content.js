"use client";

import CardMusic from "../atoms/cardMusic";
import ButtonStyleOne from "../atoms/bottonStyleOne";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useGlobalState } from "../../utils/globalState";

export default function Content() {
  const [active, setActive] = useState(false);
  const { globalState, setGlobalState } = useGlobalState();

  const data = [
    {
      image: "image-1",
      title: "Sambalado",
      desc: "Justin Bieber",
    },
    {
      image: "image-2",
      title: "I'm Yours",
      desc: "Aldy",
    },
    {
      image: "image-3",
      title: "Wanita Malam",
      desc: "Indira",
    },
    {
      image: "image-4",
      title: "Sepasang Sepatu",
      desc: "Tulus",
    },
    {
      image: "image-5",
      title: "Bunga Matahari",
      desc: "Iwan Fals",
    },
  ];

  const DataLooping = () => {
    const result = data.map((item, index) => (
      <div key={index}>
        <CardMusic params={item} author={"Aldy"} />
      </div>
    ));

    return result;
  };

  const anwarClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    console.log("tester jalan dong");

    return () => {
      console.log("Anda keluar halaman");
    };
  }, []);

  return (
    <section className="flex mt-[100px]">
      <div className="w-[20%]"></div>
      <div className="w-[80%]">
        <div className="grid grid-cols-5 gap-4 py-2">
          <DataLooping />
        </div>
        <div className="bg-blue-100">
          <h1 className="text-center">Manajemen State (Variabel)</h1>
          <ButtonStyleOne target={anwarClick} />
          {active && <p>Hello World</p>}
          <div
            className={`w-[200px] h-[200px] ${
              active ? "bg-red-500" : "bg-gray-400"
            }`}
          ></div>

          <Link href="/about"> Go To Abouut</Link>
        </div>
        <div className="bg-gray-500 mt-6">
          <button onClick={() => setGlobalState("isLight")}>
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
