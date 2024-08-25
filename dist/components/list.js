import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import data from "./data";
function ListItem({ item }) {
    return (_jsxs("li", { children: [_jsx("h2", { children: item.position }), _jsx("p", { children: item.role }), _jsx("h3", { children: item.company }), _jsx("p", { children: item.location }), _jsx("p", { children: item.postedAt }), _jsx("p", { children: item.languages })] }, item.id));
}
function List() {
    const isEmpty = data.length === 0;
    return (_jsx("ul", { children: !isEmpty ? (data.map((item) => _jsx(ListItem, { item: item }, item.id))) : (_jsx("p", { children: "No jobs found." })) }));
}
export default List;
