import React, { useState, useEffect } from "react";

// react icons
import { FaStar } from "react-icons/fa6";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import useCart from "../hooks/useCart";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartArray.cart);
  const { addToCart, updateCart } = useCart(); // cart hook
  const [product, setProduct] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  const products = useSelector((state) => state.allProducts.products);
  const storeProducts = [...products];

  // fetch product
  const fetchProduct = async () => {
    let filter = storeProducts.filter((p) => p.id === parseInt(id));

    setProduct(filter[0]);
  };

  // match to cart
  let matchToCart = cart.filter((item) => item.id == id);

  // handle buy
  const handleBuy = () => {
    addToCart(product);
    navigate("/cart");
  };

  useEffect(() => {
    fetchProduct();
  }, [storeProducts]);

  return (
    <main className="mx-auto px-10 my-10 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left side - Image gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square">
            {/* NEW and SALE tags */}
            <div className="absolute top-4 left-4 z-10 space-y-2">
              <span className="inline-block px-2 py-1 text-xs font-semibold bg-black text-white">
                NEW
              </span>
              <div className="inline-block px-2 py-1 text-xs font-semibold bg-emerald-500 text-white">
                -{product?.discount_amount} $
              </div>
            </div>

            {/* Main image with navigation arrows */}
            <div className="relative h-full">
              <img
                src={`https://admin.refabry.com/storage/product/${product?.image}`}
                alt={`${product?.name}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right side - Product details */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4 fill-black" />
              ))}
            </div>
            <span className="text-sm text-gray-600">11 Reviews</span>
          </div>

          <h1 className="text-[1.6rem] md:text-[1.9rem] text-gray-800 font-semibold">
            {product?.name}
          </h1>

          <p className="text-gray-600 text-[0.9rem]">{product?.short_desc}</p>

          <div className="flex items-center gap-3">
            <span className="text-[1.5rem] text-gray-800 font-medium">
              ${product?.buying_price}
            </span>
            <span className="text-lg text-gray-500 line-through">
              ${product?.price}
            </span>
          </div>

          <div className="space-y-2 border-t border-t-gray-200 pt-4">
            <p className="font-medium text-[0.9rem] text-gray-600">Category</p>
            <p className="text-gray-800">{product?.category?.name}</p>
          </div>

          <div className="flex gap-4 items-center pt-6">
            <div className="flex items-center bg-gray-100 rounded-md">
              <button
                onClick={() => updateCart(id, -1)}
                className="px-4 py-[0.560rem] text-[1.3rem] font-[300] hover:bg-gray-100 rounded-l-md"
              >
                −
              </button>
              <button className="w-10 font-medium outline-none text-[0.9rem] bg-transparent text-center">
                {matchToCart[0]?.quantity ? matchToCart[0]?.quantity : 0}
              </button>
              <button
                onClick={() => updateCart(id, +1)}
                className="px-4 py-[0.560rem] text-[1.3rem] font-[300] hover:bg-gray-100 rounded-r-md"
              >
                +
              </button>
            </div>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="py-3 border border-gray-200 rounded-md flex items-center justify-center gap-[10px] grow hover:bg-gray-50"
            >
              {isFavorite ? (
                <FaHeart className="w-5 h-5 text-red-500" />
              ) : (
                <FaRegHeart className="w-5 h-5 text-gray-800" />
              )}
              Wishlist
            </button>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="w-full px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-500/90"
          >
            Add to Cart
          </button>
          <button
            onClick={() => handleBuy(product)}
            className="w-full px-6 py-3 border-[2px] border-orange-500 text-orange-500 rounded-md hover:text-white hover:bg-orange-500/90"
          >
            Buy Now
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
