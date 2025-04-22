import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { MdErrorOutline } from "react-icons/md";

const Home = () => {
  const products = useSelector((state) => state.allProducts.products);
  return (
    <main className=" px-10 my-10">
      <h2 className="text-3xl font-semibold ">All products</h2>

      <div className=" mt-10 flex items-center justify-between flex-wrap gap-1">
        {products.length == 0 && (
          <div className="p-3 flex items-center gap-3 bg-[#fdeded] rounded">
            <MdErrorOutline className="text-[#d74242] text-[1.5rem]" />
            <p className="text-[#d74242] text-[1rem]">Loading.....</p>
          </div>
        )}
        {products.map((p, i) => (
          <ProductCard
            key={i}
            product={p}
            className=" w-[48%] md:w-[23%] lg:w-[18%] "
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
