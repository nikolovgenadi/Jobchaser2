import React, { useState, useEffect } from "react";
import data from "./data";
import { Job } from "../interfaces";
import "bootstrap/dist/css/bootstrap.min.css";
import ListItem from "./ListItem";

interface ListProps {
  searchQuery: string;
}

function List({ searchQuery }: ListProps): JSX.Element {
  const [filteredJobs, setFilteredJobs] = useState(data);

  useEffect(() => {
    const filtered = data.filter((i) =>
      i.position.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredJobs(filtered);
  }, [searchQuery]);

  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      <div className="accordion-item">
        {filteredJobs.length > 0 ? (
          <div>
            {filteredJobs.map((item) => (
              <ListItem key={item.id} item={item} searchQuery={searchQuery} />
            ))}
          </div>
        ) : (
          <p>No jobs found matching "{searchQuery}"</p>
        )}
      </div>
    </div>
  );
}

export default List;
