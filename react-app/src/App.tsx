import ListGroup from "./components/ListGroup";

function App() {
  //JSX: JavaScript XML
  const items = ["New York", "San Francisco", "Los Angeles"];
  let handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
