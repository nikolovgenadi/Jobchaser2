import React from "react";
import useFetchData from "./useFetchData";
import ListItem from "./ListItem";

interface ListProps {
  searchQuery: string;
}

function List({ searchQuery }: ListProps): JSX.Element {
  const { jobs, isLoading, error } = useFetchData();

  const filteredJobs = jobs.filter((i) =>
    i.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      <div className="accordion-item">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            {filteredJobs.map((item) => (
              <ListItem key={item.id} item={item} searchQuery={searchQuery} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default List;
