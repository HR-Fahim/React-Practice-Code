import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  if (items.length === 0) {
    // if no items
    return <h1>No Items Found</h1>;
  }

  // const getMessage = () => {
  //   return items.length > 3;
  // };

  // const eventHandler = () => {
  //   console.log(event);
  // };

  const [selectedItem, setSelectedItem] = useState(-1);

  // console.log(
  //   "selectedItem = " + selectedItem + " setSelectedItem = " + setSelectedItem
  // );

  return (
    <Fragment>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <h1>No Items Found</h1> : null} */}
      {/* {getMessage() ? <h1>True</h1> : <h1>False</h1>} */}
      <ul className="list-group">
        {/* <li className="list-group-item">Item 1</li>
        <li className="list-group-item">Item 2</li>
        <li className="list-group-item">Item 3</li>
        <li className="list-group-item">Item 4</li>
        <li className="list-group-item">Item 5</li> */}
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item /* unique key & in real world use id such as item.id*/}
            onClick={
              // () => console.log(item)
              // console.log(index)
              () => {
                setSelectedItem(index);
                onSelectItem(item);
              }
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
