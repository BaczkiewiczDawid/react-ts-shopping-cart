import Navbar from "../components/Navbar";
import items from "../data/items.json";
import StoreItem from "../components/StoreItem";

const Store = () => {
  return (
    <>
      <h1 className="font-bold ml-16 text-3xl mt-16">Store</h1>
      <div className="flex flex-col md:flex-row flex-wrap">
        {items.map((item) => {
          return <StoreItem {...item} />;
        })}
      </div>
    </>
  );
};

export default Store;
