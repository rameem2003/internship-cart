import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { MdErrorOutline } from "react-icons/md";

const Checkout = () => {
  const cart = useSelector((state) => state.cartArray.cart);

  const grandTotal = cart.reduce(
    (total, item) => total + item.quantity * item.buying_price,
    0
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main className="grid gap-8 grid-cols-1 md:grid-cols-3 w-full px-10 my-10">
      {/* Billing and Payment Form */}
      <div className="md:col-span-2 space-y-8 w-full">
        {/* Billing Information */}

        <div className="w-full">
          <h2 className="text-[1.5rem] font-medium text-gray-700 mb-6">
            Billing Information
          </h2>

          <div className=" flex flex-col gap-[16px]">
            <div className=" w-full">
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="text-[14px] font-[400] text-gray-700"
                >
                  Name
                </label>
                <input
                  placeholder="Name"
                  type="text"
                  id="name"
                  className="border border-gray-200 w-full py-2 px-4 rounded-md mt-1 outline-none focus:border-orange-700"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="address"
                className="text-[14px] font-[400] text-gray-700"
              >
                Address
              </label>
              <input
                placeholder="Address"
                type="text"
                id="address"
                className="border border-gray-200 w-full py-2 px-4 rounded-md mt-1 outline-none focus:border-orange-700"
              />
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <h2 className="text-[1.2rem] font-medium text-gray-700 mb-4">
            Additional Information
          </h2>
          <div>
            <label
              htmlFor="notes"
              className="text-[14px] font-[400] text-gray-700"
            >
              Order Notes (Optional)
            </label>
            <textarea
              id="notes"
              rows={4}
              placeholder="Notes about your order e.g. special notes for delivery"
              className={`border border-gray-200 w-full py-2 px-4 rounded-md mt-1 outline-none focus:border-orange-700`}
            />
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="w-full">
        <div className="bg-white rounded-md border border-gray-200 p-6">
          <h2 className="text-[1.2rem] font-medium text-gray-700 mb-6">
            Order Summary
          </h2>
          <div className="space-y-4">
            {cart.map((item, i) => (
              <div className="flex items-center space-x-4" key={i}>
                <div className="flex-shrink-0">
                  <img
                    src={`https://admin.refabry.com/storage/product/${item?.image}`}
                    alt={item?.name}
                    className="w-[50px] h-[50px] object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 line-clamp-1">
                    {item?.name}
                  </p>
                  <div className="flex items-center gap-[5px] mt-0.5">
                    <p className="text-sm text-gray-500">{item?.quantity} x</p>
                    <p className="text-sm text-orange-500 font-[600]">
                      BDT {item?.buying_price * item?.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-4 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Sub-total</span>
                <span className="font-medium text-gray-800">
                  BDT {grandTotal}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium text-green-500">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Discount</span>
                <span className="font-medium text-gray-800">0</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium text-gray-800">0</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <span className="text-base font-medium text-gray-800">
                  Total
                </span>
                <span className="text-base font-medium text-gray-800">
                  BDT {grandTotal} Taka
                </span>
              </div>
            </div>

            <button
              //   onClick={handleSubmit(checkout)}
              className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
