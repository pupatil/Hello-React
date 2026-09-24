import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/userContext";

const RestaurantListCard = (props) =>{
    // destructuring props
    const {cloudinaryImageId,name,cuisines,avgRating,sla} = props.info.info;
    const data = useContext(UserContext)
    
return (
    <div className="m-4 p-4 w-[250] bg-gray-50 rounded-lg hover:bg-gray-200">
      <img src={`${CDN_URL}${cloudinaryImageId}`} className="rounded-lg" alt="res-logo"/>
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4 className="font-semibold py-2 text-sm"> {cuisines.join(", ")}</h4>
      <h4 className="font-semibold py-2 text-sm">Rating: {avgRating}</h4>
      <h4 className="font-semibold py-2 text-sm">Delivery Time: {sla[0]} mins</h4>
    <h4 className="font-semibold py-2 text-sm">{data.loggedInUser}</h4>
    </div>
)
}

export const withPramotedRestaurantListCard = (RestaurantListCard) => {
    return(props) => {
        console.log("withPramotedRestaurantListCard", props)
        return(
            <div>
                <label className="absolute py-1 px-1 bg-black text-white rounded-sm text-sm">Pramoted</label>
                <RestaurantListCard {...props}/>
            </div>
    )
    }
}

export default RestaurantListCard;