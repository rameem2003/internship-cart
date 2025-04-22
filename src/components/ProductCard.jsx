import React, { useState } from "react";

// react icons
import { IoMdHeartEmpty } from "react-icons/io";
import { HiArrowsUpDown } from "react-icons/hi2";
import { IoBagHandleOutline, IoEyeOutline } from "react-icons/io5";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import useCart from "../hooks/useCart";

const ProductCard = ({ product, className }) => {
  const [rating, setRating] = useState(5);
  const { addToCart } = useCart(); // cart hook

  const [wishlistVisible, setWishlistVisible] = useState(false);
  const [compareVisible, setCompareVisible] = useState(false);
  const [quickViewVisible, setQuickViewVisible] = useState(false);

  return (
    <div className={`${className} group`}>
      {/* image & action buttons */}
      <div
        onMouseOver={() => setProductCardHover(true)}
        onMouseOut={() => setProductCardHover(false)}
        className="w-full relative cursor-pointer overflow-hidden"
      >
        <img
          alt="product/image"
          src={`https://admin.refabry.com/storage/product/${product?.image}`}
          className="w-full"
        />

        <div className="absolute bottom-0 left-0 w-full">
          {/* quick action buttons */}
          <div className="flex items-center gap-[15px] justify-center">
            <div
              onMouseOver={() => setWishlistVisible(true)}
              onMouseOut={() => setWishlistVisible(false)}
              className="relative w-max group-hover:translate-y-0 translate-y-[50px] transition-all opacity-0 group-hover:opacity-100 duration-300"
            >
              <p className="rounded-full bg-white p-2 hover:bg-orange-500 hover:text-white transition-all duration-200 cursor-pointer">
                <IoMdHeartEmpty className="text-[1.3rem]" />
              </p>

              {/* tooltip */}
              <p
                className={`${
                  wishlistVisible
                    ? "opacity-100 z-[100] translate-y-0"
                    : "opacity-0 z-[-1] translate-y-[20px]"
                } absolute top-[-50px] transform translate-x-[-50%] left-[50%] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}
              >
                Wishlist
                {/* arrow */}
                <span className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] bottom-[-10%]"></span>
              </p>
            </div>

            <div
              onMouseOver={() => setCompareVisible(true)}
              onMouseOut={() => setCompareVisible(false)}
              className="relative w-max group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-[80px]"
            >
              <p className="rounded-full bg-white p-2 hover:bg-orange-500 hover:text-white transition-all duration-200 cursor-pointer">
                <HiArrowsUpDown className="text-[1.3rem]" />
              </p>

              {/* tooltip */}
              <p
                className={`${
                  compareVisible
                    ? "opacity-100 z-[100] translate-y-0"
                    : "opacity-0 z-[-1] translate-y-[20px]"
                } absolute top-[-50px] transform translate-x-[-50%] left-[50%] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}
              >
                Compare
                {/* arrow */}
                <span className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] bottom-[-10%]"></span>
              </p>
            </div>

            <div
              onMouseOver={() => setQuickViewVisible(true)}
              onMouseOut={() => setQuickViewVisible(false)}
              className="relative w-max group-hover:translate-y-0 transition-all duration-700 opacity-0 group-hover:opacity-100 translate-y-[110px]"
            >
              <Link
                to={`/product/${product?.id}`}
                className="rounded-full block bg-white p-2 hover:bg-orange-500 hover:text-white transition-all duration-200 cursor-pointer"
              >
                <IoEyeOutline className="text-[1.3rem]" />
              </Link>

              {/* tooltip */}
              <p
                className={`${
                  quickViewVisible
                    ? "opacity-100 z-[100] translate-y-0"
                    : "opacity-0 z-[-1] translate-y-[20px]"
                } absolute top-[-50px] transform translate-x-[-50%] left-[50%] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}
              >
                Quick View
                {/* arrow */}
                <span className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] bottom-[-10%]"></span>
              </p>
            </div>
          </div>

          {/*  add cart */}
          <div className="w-full flex mt-6 items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 translate-y-[60px] bg-[rgb(0,0,0,0.5)]">
            {/* add to cart */}
            <button
              onClick={() => addToCart(product)}
              className="py-[13px] cursor-pointer overflow-hidden before:w-full before:h-full before:bg-orange-500 before:absolute before:top-0 z-0 before:z-[-1] before:translate-x-[-500px] hover:before:translate-x-0 before:transition-all before:duration-300 before:left-0 relative flex items-center justify-center grow text-white"
            >
              <IoBagHandleOutline className="text-[1.3rem]" />
            </button>
          </div>
        </div>
      </div>

      {/* product details */}
      <div className="mt-4">
        {/* review area */}
        <div className="flex items-center justify-center gap-[10px] mt-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => {
              const starRating = index + 1;
              return (
                <FaStar
                  key={starRating}
                  className={`cursor-pointer ${
                    starRating <= rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  size={16}
                  onClick={() => setRating(starRating)}
                />
              );
            })}
          </div>
          <span className="text-[0.9rem] text-gray-500">(43)</span>
        </div>

        <h3 className="text-[1rem] font-medium text-center capitalize mt-0.5 text-gray-900">
          {product?.name}
        </h3>
        <p className="text-center mt-0.5 text-[0.9rem] text-gray-900">
          ${product?.buying_price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
