import { useState } from "react";
import ItemList from "./ItemList";

const ResCategoriesList = ({ data,showItems,setShowItems }) => {
    const handleClick = () =>{
        setShowItems()
    }
  return (
    <div className="flex justify-center">
    {/* Header */}
    
      <div className="w-6/12 bg-gray-100 shadow-lg bottom-1 m-6 p-4 " onClick={handleClick}>
        <div className="flex justify-between">
          <span className="font-lg font-bold">
            {" "}
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

       {/* Body */}
       
       {showItems  && <ItemList items={data.itemCards} />}
    
      </div>
    </div>
  );
};
export default ResCategoriesList;
