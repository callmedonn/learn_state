"use client";

import CardMusic from "../atoms/cardMusic";
import ButtonStyleOne from "../atoms/bottonStyleOne";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Content() {
  const [active, setActive] = useState(false);
  const [dataPosts, setDataPosts] = useState([]);

  const url = "https://jsonplaceholder.typicode.com";

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

  const getDataPosts = async () => {
    try {
      const response = await fetch(`${url}/posts`, {
        method: "GET",
      }).then((res) => res.json());

      const result = response.reverse();

      setDataPosts(result);
    } catch (error) {
      alert("Internal Server Error");
      console.error(error);
    }
  };

  useEffect(() => {
    getDataPosts();
  }, []);

  return (
    <section className="flex mt-[100px]">
      <div className="w-[20%]"></div>
      <div className="w-[80%]">
        {dataPosts.length && (
          <div className="grid grid-cols-4 gap-4">
            {dataPosts.map((item, index) => (
              <div key={index} className="border-2 border-gray-500">
                <p>{item.title}</p>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
