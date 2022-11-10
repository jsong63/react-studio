import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  // const [total, setTotal] = useState(0);
  let total = 0;
  const [cart, setCart] = useState({});

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem
          item={item}
          handler={setCart}
          cart={cart}
        />
      ))}

      <div>
        <h2>Cart</h2>
        <p> {Object.values(cart).map((item) => {
          total += item.price * item.count
          return (
            <p key={item.name}>{item.count}x {item.name}</p>
          )
        })}</p>
        {/* TODO: render a list of items in the cart */}
        <p>total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;
