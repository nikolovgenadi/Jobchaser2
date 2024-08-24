function ListGroup() {
  let items = ["New York", "Tokyo", "Stockholm"];

  items = [];

  const message = items.length === 0 ? <p>no item found</p> : null;

  const getMessage = () => {
    return items.length === 0 ? <p>no item found</p> : null;
  };

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
