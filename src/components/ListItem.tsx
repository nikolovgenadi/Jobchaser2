import React from "react";
import useFetchData from "./useFetchData";
import { Job } from "../interfaces";
import styles from "./ListItem.module.css";

function ListItem({
  item,
  searchQuery,
}: {
  item: Job;
  searchQuery: string;
}): JSX.Element {
  const { jobs } = useFetchData();

  const filteredJobs = jobs.filter((i) =>
    i.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionItem}>
        {filteredJobs.length > 0 ? (
          <div>
            <h2 className={styles.accordionHeader}>
              <button
                className={styles.accordionButton}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${item.id}`}
                aria-expanded="true"
                aria-controls={`collapse${item.id}`}
              >
                {item.position}
              </button>
            </h2>
            <div id={`collapse${item.id}`} className={styles.accordionCollapse}>
              <div key={item.id} className={styles.accordionBody}>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
                <p>{item.location}</p>
                <p>{item.postedAt}</p>
                <p>{item.tools}</p>
                {item.languages.map((lang, index) => (
                  <p key={`${lang.name}-${index}`}>{lang.name}</p>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p>No jobs found matching "{searchQuery}"</p>
        )}
      </div>
    </div>
  );
}

export default ListItem;
