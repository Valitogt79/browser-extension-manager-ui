import { Button } from "./Button";

export const Filters = ({ setFilter }) => {

  const handleClick = (event) => {
    setFilter(event.target.textContent)
  }

  return (
    <div className="mb-6 md:flex md:items-center md:justify-between">
      <h2 className="dark:text-neutral-0 text-center text-[2.125rem] font-bold mb-6 md:mb-0">
        Extensions List
      </h2>
      <div className="flex justify-between md:gap-4 ">
        <Button handleClick={handleClick}>All</Button>
        <Button handleClick={handleClick}>Active</Button>
        <Button handleClick={handleClick}>Inactive</Button>
      </div>
    </div>
  );
};
