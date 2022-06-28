import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, removeFromCart , cartItems } = useShoppingCart();

  console.log(cartItems)

  return (
    <>
      {isOpen ? (
        <div className="w-3/4 fixed right-0 top-0 bg-gray-100 h-full animate-[slide_1s_ease-in-out_forward]">
          <div className="py-4 px-8 flex justify-between items-center">
            <h2 className="font-medium text-2xl">Cart</h2>
            <span
              className="font-bold cursor-pointer"
              onClick={() => closeCart()}
            >
              X
            </span>
          </div>
          {cartItems.map((item) => {
            return <CartItem id={item.id} quantity={item.quantity} removeFromCart={removeFromCart} />
          })}
        </div>
      ) : null}
    </>
  );
};

export default ShoppingCart;
