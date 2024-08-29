import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  //JSX: JavaScript XML
  // const items = ["New York", "San Francisco", "Los Angeles"];
  // let handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const [alertVisible, setAlertVisible] = useState(false);

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
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
