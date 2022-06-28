import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import items from "../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, removeFromCart, cartItems } = useShoppingCart();

  let itemsList: any = []

  cartItems.forEach((el) => {
    const foundedItem = items.find((item) => item.id === el.id);
    itemsList.push(foundedItem);
  });

  let priceList: number[] = [];

  itemsList.forEach((el: any) => {
    priceList.push(el.price)
  })

  const totalPrice = priceList.reduce((prev, curr) => prev + curr, 0)

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
            return (
              <CartItem
                id={item.id}
                quantity={item.quantity}
                removeFromCart={removeFromCart}
              />
            );
          })}
          <div className="mt-12 w-full flex items-end flex-col">
            <h4 className="font-bold mr-12">Total price</h4>
            <span className="font-light mr-12">${totalPrice}</span>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ShoppingCart;
