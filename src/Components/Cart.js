import { useDispatch, useSelector } from "react-redux";
import ItemList from "../Components/ItemList"
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
// this is efficient way to write this and select teh perticularr way of portion of store

const cartItems = useSelector((store)=> store.cart.items )

const dispatch = useDispatch()

const clearItemfromCart = () =>{
    dispatch(clearCart())
}
return(
    <div className="text-center p-4 m-4" >
        <p>Cart Component</p>
        <button className="bg-gray-950 mx-10 my-10 text-white rounded-lg  p-2 shadow-lg" onClick={clearItemfromCart}>
            Clear Cart
        </button>
        {cartItems.length === 0 && <h1 className="">Please add more items to the cart</h1>}
        <div className="w-6/12 m-auto p-2">
            <ItemList items={cartItems}/>
        </div>
    </div>
    )
}

export default Cart;

import { useSelector } from "react-redux";
import ItemList from "./ItemList";
