import RestaurantListCard, {
  withPramotedRestaurantListCard,
} from "./RestaurantListCard";
import { useState, useEffect } from "react";
import { restaurantList } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useContext } from "react";

const BodyComponent = () => {
  // local staate varibles - super power variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [resFilteredList, setFilteredList] = useState([]);
  const [nextOffset, setNextOffset] = useState("");
  const [menuOption, setMenuOption] = useState([]);
  console.log("Body rendered");
  // Whenever state varible updates a reconcilation cycle (re-render the component)

  const {loggedInUser, setUserName} = useContext(UserContext)

  const PromotedRestaurantCard = withPramotedRestaurantListCard(RestaurantListCard);
  useEffect(() => {
    fetchData();
  }, [searchText]);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 3-second delay
    console.log("Json Data", json);
    const restaurants =
      json.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const updatedRestaurants = restaurants.map((restaurant, index) => ({
      ...restaurant,
      info: {
        ...restaurant.info,
        promoted: restaurant.info.avgRating >= 4.3,
      },
    }));
    console.log("restaurants", updatedRestaurants);
    // optional chaining
    setListOfRestaurants(updatedRestaurants);
    setFilteredList(updatedRestaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>You are looks offline , Please check your internet connection.!!!</h1>
    );
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex p-4 m-4 items-center">
        <div className="relative w-96">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full h-11 pl-10 pr-4 rounded-full border border-gray-300
               shadow-md outline-none
               focus:ring-2 focus:ring-green-300 focus:border-green-500
               transition-all duration-300"
          />
        </div>
        <button
          className="w-24 px-4 py-2 m-4 bg-green-100  hover:bg-green-200"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((row) =>
              row.info.name.toLowerCase().includes(searchText.toLowerCase()),
            );
            console.log("filteredList", filteredList);
            setFilteredList(filteredList);
          }}
        >
          Search
        </button>
        <div className="flex">
        
          <input className="w-full h-11 pl-10 pr-4 rounded-full border border-gray-300
               shadow-md outline-none
               focus:ring-2 focus:ring-green-300 focus:border-green-500
               transition-all duration-300"
               value={loggedInUser}
               onChange={(e)=>{setUserName(e.target.value)}}
               ></input>
        </div>
      </div>

      <div className="flex flex-wrap">
        {resFilteredList?.map((restaurant) => {
          return (
            <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
              {restaurant.info.promoted ? (
                <PromotedRestaurantCard
                  
                  info={restaurant}
                />
              ) : (
                <RestaurantListCard
                  
                  info={restaurant}
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BodyComponent;
