import { useEffect, useState } from "react";
import mockMenuData from "../utils/mockMenuData.json";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategoriesList from "./ResCategoriesList";
import { flushSync } from "react-dom";
const RestaurantOptionList = () => {
  const { resId } = useParams();

  const restaurantMenu = useRestaurantMenu(resId);

  const [showIndex,setShowIndex] = useState(null)

  if (restaurantMenu === null) {
    return <Shimmer />;
  }

  console.log("restaurantMenuList data", restaurantMenu);
  const restaurantName = restaurantMenu?.data?.cards?.[2].card.card.info;
  const cusines = restaurantMenu?.data?.cards?.[2].card.card.info;
  // const itemCards = restaurantMenu?.data?.cards?.[4].groupedCard?.cardGroupMap?.REGULAR?.cards;
  const categories =
    restaurantMenu?.data?.cards?.[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );
  console.log("categories", categories);

  return (
    <div className="text-center">
      <h1 className="m-6 font-bold text-2xl">{restaurantName.name}</h1>
      <p className="font-bold font-lg">{cusines.cuisines.join(" ,")} </p>
      {categories.map((category,index) => {
        return (
          <ResCategoriesList
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowItems={() => { setShowIndex(index)}}
          />
        );
      })}
    </div>
  );
};

export default RestaurantOptionList;
