import Button from "./components/Button";

function App() {
  //JSX: JavaScript XML
  // const items = ["New York", "San Francisco", "Los Angeles"];
  // let handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading={"Cities"}
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>

    // <div>
    //   <Alert>
    //     <span>Hello World!</span>
    //   </Alert>
    // </div>

    <div>
      <Button color="danger" onClick={() => console.log("clicked")}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
