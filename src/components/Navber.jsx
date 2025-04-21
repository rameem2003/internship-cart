import React, { useEffect, useState } from "react";

// react icons
import { IoIosSearch } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import axios from "axios";
import { useDispatch } from "react-redux";
import { allProducts } from "../redux/slices/LoadAllProducts";

const Navber = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fetchProducts = async () => {
    try {
      let res = await axios.get(
        "https://admin.refabry.com/api/all/product/get"
      );

      dispatch(allProducts(res.data.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <nav className="flex px-10 py-3 bg-orange-300 items-center justify-between w-full relative">
      {/* logo */}
      <h1 className="text-3xl font-semibold text-[#424242]">A</h1>

      {/* nav menus */}
      <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
        <li className="hover:border-b-orange-500 font-bold border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-orange-500 capitalize">
          home
        </li>
        <li className="hover:border-b-orange-500 font-bold border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-orange-500 capitalize">
          about us
        </li>
        <li className="hover:border-b-orange-500 font-bold border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-orange-500 capitalize">
          services
        </li>
      </ul>

      {/* search bar and community links */}
      <div className="flex items-center gap-[10px]">
        <div className=" relative">
          <div className="h-5 w-5 rounded-full absolute bg-white top-[-10px] right-[-10px] flex items-center justify-center">
            <span className="text-[0.8rem] text-black font-bold">1</span>
          </div>
          <FaCartShopping className="text-[1.6rem] text-black cursor-pointer hover:text-[#3B9DF8] transition-all duration-500 " />
        </div>

        <CiMenuFries
          className="text-[1.6rem] text-[#424242] cursor-pointer md:hidden flex"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* mobile sidebar */}
      <aside
        className={` ${
          isMenuOpen
            ? "right-0 opacity-100 z-20"
            : "right-[100%] opacity-0 z-[-1]"
        } md:hidden bg-orange-300 p-4 text-center absolute top-[44px] right-0 w-full  transition-all duration-300`}
      >
        <ul className="items-center gap-[20px] text-[1rem]  flex flex-col">
          <li className="hover:border-b-orange-500 font-bold border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">
            home
          </li>
          <li className="hover:border-b-orange-500 font-bold border-b-[2px] border-transparent transition-all duration-500 cursor-pointer ter capitalize">
            about us
          </li>
          <li className="hover:border-b-orange-500 font-bold border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">
            services
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default Navber;
