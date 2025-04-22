import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { cartClear } from "../redux/slices/Cart";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartArray.cart);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [err, setError] = useState(null);

  const subtotal = cart.reduce(
    (total, item) => total + item.quantity * item.buying_price,
    0
  );
  let grandTotal = 80 + subtotal;

  let productIdArr = cart.map((item) => item.id);
  let quantityArr = cart.map((item) => item.quantity);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  /**
   * handle checkout
   */
  const handleCheckout = async (e) => {
    e.preventDefault();
    try {
      let orderObject = {
        product_ids: productIdArr.join(","),
        s_product_qty: quantityArr.join(","),
        c_phone: phone,
        c_name: name,
        courier: "steadfast",
        address: address,
        advance: null,
        cod_amount: subtotal,
        discount_amount: null,
        delivery_charge: "80",
      };

      let res = await axios.post(
        "https://admin.refabry.com/api/public/order/create",
        orderObject
      );

      dispatch(cartClear());
      navigate("/success", { state: { key: res.data } });
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  return (
    <>
      {err && (
        <div className="p-3 flex items-center gap-3 bg-[#fdeded] rounded mx-10 my-10">
          <MdErrorOutline className="text-[#d74242] text-[1.5rem]" />
          <p className="text-[#d74242] text-[1rem]">Something went wrong</p>
        </div>
      )}
      <form
        onSubmit={handleCheckout}
        className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-10 my-10"
      >
        {/* Billing and Payment Form */}
        <div className="md:col-span-1 lg:col-span-2 space-y-8 w-full">
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
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Name"
                    type="text"
                    id="name"
                    className="border border-gray-200 w-full py-2 px-4 rounded-md mt-1 outline-none focus:border-orange-700"
                    required
                  />
                </div>
              </div>
              <div className=" w-full">
                <div className="w-full">
                  <label
                    htmlFor="phone"
                    className="text-[14px] font-[400] text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    placeholder="Phone"
                    type="text"
                    id="Phone"
                    className="border border-gray-200 w-full py-2 px-4 rounded-md mt-1 outline-none focus:border-orange-700"
                    required
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
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  placeholder="Address"
                  type="text"
                  id="address"
                  className="border border-gray-200 w-full py-2 px-4 rounded-md mt-1 outline-none focus:border-orange-700"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="md:col-span-1 lg:col-span-1 w-full">
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
                      <p className="text-sm text-gray-500">
                        {item?.quantity} x
                      </p>
                      <p className="text-sm text-orange-300 font-[600]">
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
                    BDT {subtotal}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-500">80</span>
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
                type="submit"
                className="w-full cursor-pointer bg-orange-300 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors"
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Checkout;
