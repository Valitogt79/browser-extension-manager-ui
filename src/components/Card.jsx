import { Toggle } from "rsuite";
import "rsuite/Toggle/styles/index.css";
import { Button } from "./Button";

export const Card = ({ logo, name, description, isActive, extensions, setExtensions }) => {

  const onToggle = () => {
    const currentExtension = extensions.filter(extension => extension.name === name)[0]
    const updateExtension = { ...currentExtension, isActive: !currentExtension.isActive }
    const newExtension = extensions.map(extension => {
      if (extension.name === name) {
        extension = { ...updateExtension }
      }
      return extension
    })
    setExtensions(newExtension)
  }

  const onRemove = () => {
    const filterExtension = extensions.filter(extension => extension.name !== name)
    setExtensions(filterExtension)
  }

  return (
    <div className="bg-neutral-0 rounded-lg p-4 shadow-sm dark:bg-neutral-800 ">
      <div className="flex gap-4 items-start mb-10">
        <img src={logo} alt="Logo" />
        <div>
          <h2 className="text-[1.250rem] font-bold mb-2 dark:text-neutral-0">
            {name}
          </h2>
          <p className="text-neutral-600 text-[0.938rem] dark:text-neutral-300">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Button handleClick={onRemove} textSmall>Remove</Button>
        <Toggle onClick={onToggle} checked={isActive} color="red" />
      </div>
    </div>
  );
};
