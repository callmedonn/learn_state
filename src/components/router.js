"use client";

import { useDarkModeState } from "../utils/globalState";

export default function Container({ children }) {
  const { darkModeState, setDarkModeState } = useDarkModeState();
  return (
    <div
      className={`${
        darkModeState === "isDark"
          ? "bg-black text-white"
          : "bg-white text-black"
      } w-[100vw] h-[100vh] `}
    >
      {children}
    </div>
  );
}
