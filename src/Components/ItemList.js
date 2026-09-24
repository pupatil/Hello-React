import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  console.log("itemListData", items);

const dispatch = useDispatch();

const addItemHandleClick = (item) => {
  // dispatching the action
   dispatch(addItems(item));
}
  return (
    <div>
      {items.map((item) => {
        return (
          <div className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between" key={item.card.info.id}>
            <div className="w-10/12">
              {/* <img src={CDN_URL + item.card.info.imageId} className="w-14"/> */}
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>{item.card.info.category}</span>
                <span>{item.card.info.price / 100}</span>
              </div>

              <p>{item.card.info.description}</p>
              <p>₹ : {item.card.info.price / 100}</p>
            </div>
            <div className="w-2/12">
            <button className="bg-gray-950 mx-10 text-white rounded-lg absolute p-2 shadow-lg"
            onClick={() => addItemHandleClick(item)}
            >Add +</button>
              <img src={CDN_URL + item.card.info.imageId} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
