import itemsList from '../data/items.json';

type Item = {
    id: number,
    quantity: number,
    removeFromCart: (id: number) => void
}

const CartItem = ({ id, quantity, removeFromCart }: Item) => {
    const item = itemsList.find((el) => el.id === id)

    const totalPrice: number = item!.price * quantity;

  return (
    <>
      <div className="flex items-center p-4">
        <div>
          <img
            className="w-32"
            src="https://images.unsplash.com/photo-1656356594333-8fcfa715c392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            alt=""
          />
        </div>
        <div className="w-1/2 ml-4">
          <h3 className="font-medium">{item!.name}</h3>
          <p className="font-light">${item!.price}</p>
        </div>
        <div className="flex items-center">
          <p>${totalPrice}</p>
          <div onClick={() => removeFromCart(id)} className="bg-transparent w-8 h-8 rounded-full border-2 border-red-400 text-red-400 cursor-pointer items-center">
            <span>X</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
