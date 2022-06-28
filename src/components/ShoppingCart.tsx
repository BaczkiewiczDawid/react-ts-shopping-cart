import { useShoppingCart } from "../context/ShoppingCartContext";

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <>
      {isOpen ? (
        <div className="w-3/4 fixed right-0 top-0 bg-red-300 h-full animate-[slide_1s_ease-in-out_forward]">
          <div className="py-4 px-8 flex justify-between items-center">
            <h2 className="font-medium text-2xl">Cart</h2>
            <span className="font-bold cursor-pointer" onClick={() => closeCart()}>X</span>
          </div>
          <div className="flex items-center p-4">
            <div>
              <img className="w-32" src="https://images.unsplash.com/photo-1656356594333-8fcfa715c392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" />
            </div>
            <div className="w-1/2 ml-4">
              <h3 className="font-medium">Book</h3>
              <p className="font-light">$10.99</p>
            </div>
            <div className="flex items-center">
              <p>$10.99</p>
              <div className="bg-transparent w-8 h-8 rounded-full border-2 border-red-400 text-red-400 cursor-pointer items-center">
                <span>X</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ShoppingCart;
