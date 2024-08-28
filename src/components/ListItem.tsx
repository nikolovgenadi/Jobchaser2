import React from "react";
import data from "./data";
import { Job } from "../interfaces";
// import NavbarComponent from "./navbar";

interface ListItemProps {
  item: Job;
  searchQuery: string;
}

function ListItem({ item, searchQuery }: ListItemProps): JSX.Element {
  const filteredJobs = data.filter((item) =>
    item.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="accordion-item">
      {filteredJobs.length > 0 ? (
        <div>
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
          <div
            id={`collapse${item.id}`}
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <h3>{item.role}</h3>
              <p>{item.company}</p>
              <p>{item.location}</p>
              <p>{item.postedAt}</p>
              {item.languages.map((lang) => (
                <p key={lang.name}>{lang.name}</p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>No jobs found matching "{searchQuery}"</p>
      )}
    </div>
  );
}

// function List(): JSX.Element {
//   const isEmpty = data.length === 0;

//   return (
//     <div className="accordion">
//       {!isEmpty ? (
//         data.map((item: Job) => <ListItem key={item.id} item={item} />)
//       ) : (
//         <div className="accordion-item">
//           <h2 className="accordion-header">
//             <button
//               className="accordion-button collapsed"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseNoJobs"
//               aria-expanded="false"
//               aria-controls="collapseNoJobs"
//             >
//               No Jobs Found
//             </button>
//           </h2>
//           <div id="collapseNoJobs" className="accordion-collapse collapse">
//             <div className="accordion-body">
//               <p>No jobs found.</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

export default ListItem;
// export function handleSearchChange() {}
