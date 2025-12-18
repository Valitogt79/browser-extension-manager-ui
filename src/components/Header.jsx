import Logo from "../assets/images/logo.svg";
import LogoDark from "../assets/images/logo-dark.svg";
import IconSun from "../assets/images/icon-sun.svg";
import IconMoon from "../assets/images/icon-moon.svg";
import { useState } from "react";

export const Header = () => {

  const savedTheme = localStorage.getItem('dark')
  if (JSON.parse(savedTheme)) {
    document.documentElement.classList.add('dark')
  }

  const [isDark, setIsDark] = useState(JSON.parse(savedTheme));
  const handleClick = () => {
    const isDarkChanged = document.documentElement.classList.toggle("dark");
    setIsDark(isDarkChanged);
    //HACK: Agregando la funcionalida de localStorage 
    localStorage.setItem('dark', isDarkChanged)
  };

  return (
    <div className="bg-neutral-0 dark:bg-neutral-800 flex justify-between h-[66px] px-3 py-2 rounded-[10px] items-center mb-6">
      <img src={isDark ? LogoDark : Logo} alt="Logo" />
      <button
        onClick={handleClick}
        type="button"
        className="bg-neutral-100 size-[50px] grid place-content-center rounded-lg cursor-pointer hover:bg-neutral-200 dark:bg-neutral-600 hover:dark:bg-neutral-700"
      >
        <img src={isDark ? IconSun : IconMoon} alt="Icon Moon" />
      </button>
    </div>
  );
};
