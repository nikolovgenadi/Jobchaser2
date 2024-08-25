import React from "react";
import data from "./data";
import { Job } from "../interfaces";

interface ListItemProps {
  item: Job;
}

function ListItem({ item }: ListItemProps): JSX.Element {
  return (
    <li key={item.id}>
      <h2>{item.position}</h2>
      <p>{item.role}</p>
      <h3>{item.company}</h3>
      <p>{item.location}</p>
      <p>{item.postedAt}</p>
      <p>{item.languages}</p>
    </li>
  );
}

function List(): JSX.Element {
  const isEmpty = data.length === 0;

  return (
    <ul>
      {!isEmpty ? (
        data.map((item: Job) => <ListItem key={item.id} item={item} />)
      ) : (
        <p>No jobs found.</p>
      )}
    </ul>
  );
}

export default List;
