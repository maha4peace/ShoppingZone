
import './App.css';
import { useState } from 'react';
import Product from './components/Products';
import Cartitem from './components/Cartitem';

const categories = ["tool", "food", "clothing"]

const products = [
  {
    name: "allen wrench",
    price: 2.99,
    description: "handy tool",
    category: "tool"
  }, 
  {
    name: "cornucopia",
    price: 5.99,
    description: "destive holiday decoration",
    category: "tool"
  },
  {
    name: "banana",
    price: 0.99,
    description: "fruit of potassium",
    category: "food"
  },
  {
    name: "jack-o-lantern",
    price: 3.99,
    description: "spooky seasonal fun",
    category: "food"
  },
  {
    name:"doggie treat box",
    price: 5.99,
    description: "fido loves 'em",
    category: "food"
  },
  {
    name: "LED lightbulb",
    price: 6.55,
    description: "It's super efficient!",
    category: "tool"
  },
  {
    name: "turtleneck",
    price: 19.99,
    description: "available in black!",
    category: "clothing"
  }, 
  { name: "hammer",
  price: 9.99, 
  description: "SMASH",
  category: "tool"
  },
  {
    name: "t-shirt",
    price: 10.99,
    description: "You wear this!",
    category: "clothing"
  },
  {
    name: "slacks",
    price: 29.99,
    description: "For formal events",
    category: "clothing"
  }

]



function App() {

  const [cart, setCart] = useState([])

  return (
    <div>
      <h1> Hi There!</h1>
      <ul>
        {products.map(item => {
          return (
           <Product item = {item} setCart = {setCart} cart = {cart}/>
          )
        }
        )}
      </ul>
      <h2> CART: </h2>
      <ul>
        {cart.map(item => {
          return (
            <Cartitem item = {item} /> 
          )
        })}
      </ul>

    
    </div>
  );
}

export default App;
