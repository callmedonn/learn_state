"use client";

import CardMusic from "../atoms/cardMusic";
import ButtonStyleOne from "../atoms/bottonStyleOne";
import { useState } from "react";

export default function Content() {
  const [active, setActive] = useState(false);

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
        </div>
      </div>
    </section>
  );
}
