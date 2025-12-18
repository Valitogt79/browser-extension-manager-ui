export const Button = ({ children, textSmall, handleClick, active }) => {
  return (
    <button
      onClick={handleClick}
      className={`border border-neutral-300order border-neutral-300 px-5 py-2 rounded-full hover:bg-neutral-600 cursor-pointer hover:text-neutral-0 dark:text-neutral-0  ${active ? 'bg-neutral-600 text-white' : 'bg:transparent'} ${active ? 'dark:bg-red-500' : 'dark:bg-neutral-800'}  dark:hover:bg-red-500  ${textSmall ? "text-base" : "text-[1.250rem]"}`}
    >
      {children}
    </button>
  );
};


