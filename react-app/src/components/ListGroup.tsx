import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  return (
    <Fragment>
      <h1>List Group</h1>
      <ul className="list-group">
        <li className="list-group-item">Item 1</li>
        <li className="list-group-item">Item 2</li>
        <li className="list-group-item">Item 3</li>
        <li className="list-group-item">Item 4</li>
        <li className="list-group-item">Item 5</li>
      </ul>
    </Fragment>
  );
}

export default ListGroup;
