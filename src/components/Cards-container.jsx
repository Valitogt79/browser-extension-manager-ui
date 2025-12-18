import { useState } from "react";
import data from "../../data.json";
import { Card } from "./Card";

export const CardsContainer = ({ filter }) => {

  const [extensions, setExtensions] = useState(data)

  let filteredExtensions = []
  if (filter === 'Inactive') {
    filteredExtensions = extensions.filter((extension) => {
      return !extension.isActive
    })
  } else if (filter === 'Active') {
    filteredExtensions = extensions.filter((extension) => {
      return extension.isActive
    })
  } else if (filter === 'All') {
    filteredExtensions = extensions
  }


  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 ">
      {filteredExtensions.map((extension) => (
        <Card key={extension.name}
          {...extension}
          extensions={extensions}
          setExtensions={setExtensions}
        />
      ))}
    </div>
  );
};
