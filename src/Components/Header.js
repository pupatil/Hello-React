import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/userContext"
import { useSelector } from "react-redux";

const HeaderComponent = () => {

const [btnText ,setBtnText] = useState("Login")

console.log("Header Component Render");

const data = useContext(UserContext);

console.log("UserContext data", data);

const onlineStatus = useOnlineStatus()

const cartItmes = useSelector((store)=>{
    store.cart.items
})
console.log("cartItmes".cartItmes)
// subscribing to store , reading data from the store

const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-pink-50">
        <div className="">
            <img src={LOGO_URL} className="w-36" alt="logo" />
        </div>
        <div className="flex items-center">
            <ul className="flex mr-4 p-4">
                 <li className="px-4">
                    Online Status : {onlineStatus ? "✅" : "🔴"}
                </li>
                <li  className="px-4">
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li  className="px-4">
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li className="px-4">
                    <Link to="/contact-us">
                    Contact
                    </Link>
                </li>
                <li className="px-4">
                    <Link to="/cart">
                        Cart items: {cartItems.length}
                    </Link>
                </li>
                 <li className="px-4">
                    <Link to="/grocery">
                        Grocery
                    </Link>
                </li>
                <li className="px-4">
                    <button className="btnStyle" onClick={()=>{
                    setBtnText(btnText === "Login" ? "Logout" : "Login")
                    }}>{btnText}</button>
                </li>
                <li className="px-4">
                   {data.loggedInUser}
                </li>
            </ul>
        </div>
    </div>
  );
}

export default HeaderComponent;