import React from "react";

const CategoryTitle = ({ selected }: { selected: string }) => {
  return <h1 className="ml-4 text-xl font-semibold">{selected}</h1>;
};

export default CategoryTitle;
