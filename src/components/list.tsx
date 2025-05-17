import React from "react";
import useFetchData from "./useFetchData";
import ListItem from "./ListItem";
import styles from "./list.module.css";

interface ListProps {
  searchQuery: string;
}

function List({ searchQuery }: ListProps): JSX.Element {
  const { jobs, isLoading, error } = useFetchData();

  const filteredJobs = jobs.filter((i) =>
    i.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionItem}>
        {isLoading ? (
          <p className={styles.loading}>Loading...</p>
        ) : error ? (
          <p className={styles.error}>Error: {error}</p>
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
