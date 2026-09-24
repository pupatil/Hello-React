import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [menuOption, setMenuOption] = useState(null);

  useEffect(() => {
    fetchRestaurantMenu();
  }, [resId]);

  const fetchRestaurantMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      const json = await response.json();

      setMenuOption(json);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
    }
  };

  return menuOption;
};

export default useRestaurantMenu;
