import { useEffect, useState } from "react";
import './Bottles.css'
import { addToLS } from "../../Utilities/LocalStorage";
const Bottles = () =>{
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() =>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])
    const handleAddToCart = bottle =>{
        const newCart = [...cart, bottle];
        setCart(newCart)
        addToLS
    }
    return (
        <div>
           <div className="bottle-container">
           <h2>Bottles Here: {bottles.length}</h2>
           <h4>Cart: {cart.length}</h4> 
           {
            bottles.map(bottle => <Bottles key={bottle.id} bottle={bottle} handleAddToCart ={handleAddToCart}></Bottles>)
           }
           </div>
        </div>
    );
};

export default Bottles;