import React from "react";
import data from "./data";
import { Job } from "../interfaces";

interface ListItemProps {
  item: Job;
}

function ListItem({ item }: ListItemProps): JSX.Element {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${item.id}`}
          aria-expanded="true"
          aria-controls={`collapse${item.id}`}
        >
          {item.position}
        </button>
      </h2>
      <div id={`collapse${item.id}`} className="accordion-collapse collapse">
        <div className="accordion-body">
          <h3>{item.role}</h3>
          <p>{item.company}</p>
          <p>{item.location}</p>
          <p>{item.postedAt}</p>
          <p>{item.languages}</p>
        </div>
      </div>
    </div>
  );
}

function List(): JSX.Element {
  const isEmpty = data.length === 0;

  return (
    <div className="accordion">
      {!isEmpty ? (
        data.map((item: Job) => <ListItem key={item.id} item={item} />)
      ) : (
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNoJobs"
              aria-expanded="false"
              aria-controls="collapseNoJobs"
            >
              No Jobs Found
            </button>
          </h2>
          <div id="collapseNoJobs" className="accordion-collapse collapse">
            <div className="accordion-body">
              <p>No jobs found.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default List;
