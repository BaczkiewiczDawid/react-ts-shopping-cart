import { Link } from "react-router-dom";
import ShoppingCart from "../../assets/images/cart.svg";

const Navbar = () => {
  return (
    <div className=" h-12 flex items-center shadow-xl justify-between">
      <div>
        <Link className="ml-20 hover:text-red-700 hover:duration-200" to="/home">
          Home
        </Link>
        <Link className="ml-8 hover:text-red-700 hover:duration-200" to="/store">
          Store
        </Link>
        <Link className="ml-8 hover:text-red-700 hover:duration-200" to="/About">
          About
        </Link>
      </div>
      <div className="border-black rounded-xl border-1 mr-16 cursor-pointer">
        <img className="w-6 h-auto" src={ShoppingCart} alt="shopping cart" />
      </div>
    </div>
  );
};

export default Navbar;
