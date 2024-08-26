import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import data from "./data";
function ListItem({ item }) {
    return (_jsxs("div", { className: "accordion-item", children: [_jsx("h2", { className: "accordion-header", children: _jsx("button", { className: "accordion-button", type: "button", "data-bs-toggle": "collapse", "data-bs-target": `#collapse${item.id}`, "aria-expanded": "true", "aria-controls": `collapse${item.id}`, children: item.position }) }), _jsx("div", { id: `collapse${item.id}`, className: "accordion-collapse collapse", children: _jsxs("div", { className: "accordion-body", children: [_jsx("h3", { children: item.role }), _jsx("p", { children: item.company }), _jsx("p", { children: item.location }), _jsx("p", { children: item.postedAt }), _jsx("p", { children: item.languages })] }) })] }));
}
function List() {
    const isEmpty = data.length === 0;
    return (_jsx("div", { className: "accordion", children: !isEmpty ? (data.map((item) => _jsx(ListItem, { item: item }, item.id))) : (_jsxs("div", { className: "accordion-item", children: [_jsx("h2", { className: "accordion-header", children: _jsx("button", { className: "accordion-button collapsed", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#collapseNoJobs", "aria-expanded": "false", "aria-controls": "collapseNoJobs", children: "No Jobs Found" }) }), _jsx("div", { id: "collapseNoJobs", className: "accordion-collapse collapse", children: _jsx("div", { className: "accordion-body", children: _jsx("p", { children: "No jobs found." }) }) })] })) }));
}
export default List;
