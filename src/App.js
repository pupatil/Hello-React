import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import HeaderComponent from "./Components/Header";  
import BodyComponent from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";
import RestaurantListCard from "./Components/RestaurantListCard";
import RestaurantOptionList from "./Components/RestaurantOptionList";
import Cart from "./Components/Cart"
import UserContext from "./utils/userContext";
import { useEffect,useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Grocery from "./Components/Grocery";

// Chunking
// Code Spliting 
// Dynamic bundlling
// lazy loading 
// On demand loading 

const AppLayoutComponent = () => {

  const [userName , setUserName] = useState('')


  useEffect(() => {
    // API call
  const data = {
    userName: "Puja Yogesh"
  }
  setUserName(data.userName)
  }, []);



  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
    <div>
       <UserContext.Provider value={{loggedInUser:"puja"}}>
      <HeaderComponent />
      </UserContext.Provider>
      <Outlet></Outlet>
    </div>
    </UserContext.Provider>
    </Provider>
  );
}       

const Grocery = lazy(() => import("./Components/Grocery"))
   
const appRouter = createBrowserRouter([
  {
      path:"/",
      element:<AppLayoutComponent/>,
      children:[
      {
        path:"/",
        element:<BodyComponent/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact-us",
        element:<ContactUs/>
      },
        {
        path:"/grocery",
        element:<Suspense fallback={<h2>Loading....!!!</h2>}>
          <Grocery/>
        </Suspense>
      },
        {
        path:"/restaurants/:resId",
        element:<RestaurantOptionList/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
  ],
  errorElement:<Error/>,
},
])

// root.render(HeadingComponent); // we cant pass like this beacuse its a comopoen elament we can only pass in this way. we can also pass like this root.render(<HeadingComponent />); but we cant pass like this root.render(HeadingComponent()); because it will return a react element and we need to pass a react component.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// we can also pass like this root.render(<AppLayoutComponent />); but we cant pass like this root.render(AppLayoutComponent()); because it will return a react element and we need to pass a react component.
