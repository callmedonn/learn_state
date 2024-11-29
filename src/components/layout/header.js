"use client";

import { useDarkModeState } from "../../utils/globalState";

export default function Header() {
  const { darkModeState, setDarkModeState } = useDarkModeState();
  return (
    <header className="w-[80%] h-[100px] bg-[#3D3D3D] fixed top-0 right-0">
      <div className="flex justify-between">
        <span></span>
        <div className="p-12">
          <button
            onClick={() =>
              setDarkModeState(
                darkModeState === "isDark" ? "isLight" : "isDark"
              )
            }
            className="text-white"
          >
            {darkModeState === "isDark" ? "Is Light" : "isDark"}
          </button>
        </div>
      </div>
    </header>
  );
}
