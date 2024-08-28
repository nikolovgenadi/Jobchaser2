import React from "react";
import data from "./data";
import ListItem from "./ListItem";

interface ListProps {
  searchQuery: string;
}

function List({ searchQuery }: ListProps) {
  return (
    <>
      {data.map((item) => (
        <ListItem key={item.id} item={item} searchQuery={searchQuery} />
      ))}
    </>
  );
}

export default List;
