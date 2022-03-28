import "./App.css";
import { atom, useRecoilState } from "recoil";

const shoppingList = atom({
  key: "shoppingList",
  default: ["Milk", "Eggs", "Bread"],
});

function App() {
  const [myShoppingList, setMyShoppingList] = useRecoilState(shoppingList);

  const removeItem = (item) => () => {
    const itemIndex = myShoppingList.findIndex((element) => element === item);
    // setMyShoppingList(() => {
    //   return myShoppingList
    //     .slice(0, itemIndex)
    //     .concat(myShoppingList.slice(itemIndex + 1));
    // });
    setMyShoppingList([
      ...myShoppingList.slice(0, itemIndex),
      ...myShoppingList.slice(itemIndex + 1),
    ]);
  };

  const addItem = (event) => {
    if (event.key === "Enter") {
      setMyShoppingList([...myShoppingList, event.target.value]);
    }
  };

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <input type="text" className="inputbox" onKeyDown={addItem} />
      <ul className="list">
        {myShoppingList.map((item, i) => (
          <li className="item" key={i} onClick={removeItem(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
