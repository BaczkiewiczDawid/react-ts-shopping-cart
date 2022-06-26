import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity: number = getItemQuantity(id);

  console.log(quantity)

  return (
    <div
      className="w-4/5 flex flex-col items-center ml-16 md:w-1/3 lg:w-1/4 mt-8"
      key={id}
    >
      <img src={imgUrl} className="mt-12" alt="" />
      <div className="flex justify-between mt-4 items-center w-5/6">
        <p className="font-bold text-2xl">{name}</p>
        <span className="font-light">${price}</span>
      </div>
      {quantity === 0 ? (
        <button className="bg-blue-400 px-8 py-2 rounded text-white mt-4 hover:bg-blue-500 duration-200" onClick={() => increaseCartQuantity(id)}>Add to cart</button>
      ) : (
        <>
          <div className="flex items-center mt-12">
            <button
              className="bg-blue-600 w-8 h-8 text-white font-bold rounded hover:bg-blue-700 duration-200"
              onClick={() => decreaseCartQuantity(id)}
            >
              -
            </button>
            <p className="px-12">{quantity} in cart</p>
            <button
              className="bg-blue-600 w-8 h-8 text-white font-bold rounded hover:bg-blue-700 duration-200"
              onClick={() => increaseCartQuantity(id)}
            >
              +
            </button>
          </div>
          <button className="bg-red-400 text-white px-6 py-2 rounded mt-8 hover:bg-red-500 duration-200">
            Remove
          </button>
        </>
      )}
    </div>
  );
};

export default StoreItem;
