import { useState, ChangeEvent } from "react";
import Button from "./components/Button";

function App() {
  const [newCoin, setNewCoin] = useState("");
  const [list, setList] = useState(["KLV", "ETH", "BTC"]);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setNewCoin(event.target.value);
  };

  const addToList = () => {
    // simulate api call
    setTimeout(() => {
      setList((coin) => [...coin, newCoin]);
    }, 500);
  };

  return (
    <div>
      <input placeholder="New coin" value={newCoin} onChange={handleInput} />
      <Button label="Add" onClick={addToList} />
      <ul>
        {list.map((item, index) => (
          <li key={String(index)}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
