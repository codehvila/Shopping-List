import "./App.css";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const priceList = {
  Milk: 0.76,
  Eggs: 1.25,
  Bread: 0.45,
  "Olive Oil Bread": 0.5,
};

const shoppingList = atom({
  key: "shoppingList",
  default: ["Milk", "Eggs", "Bread", "Olive Oil Bread"],
});

const amount = selector({
  key: "amount",
  get: ({ get }) => {
    return {
      totalPrice: get(shoppingList)
        .map((food) => {
          return priceList[food] || 0;
        })
        .reduce((current, sum) => {
          return sum + current;
        }, 0),
      totalItems: get(shoppingList).length,
    };
  },
});

function App() {
  const [myShoppingList, setMyShoppingList] = useRecoilState(shoppingList);
  const total = useRecoilValue(amount);

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
      <h3>Total Price: {total.totalPrice}</h3>
      <h4>Total Items: {total.totalItems}</h4>
    </div>
  );
}

export default App;
