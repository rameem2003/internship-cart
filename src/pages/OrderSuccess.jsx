import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useLocation } from "react-router";

const OrderSuccess = () => {
  const data = useLocation();
  console.log(data);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center bg-green-50 py-10 px-10">
      <div>
        <div className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-xl">
          <FaCheckCircle className="mb-4 h-20 w-20 text-green-500" />
          <h1 className="text-2xl font-bold text-gray-800">
            Payment Successful!
          </h1>
          <p className="mt-2 text-center text-gray-600">
            Thank you for your payment. Your transaction has been completed
            successfully.
          </p>

          <button
            className="mt-6 rounded-lg bg-green-500 px-6 py-2 font-semibold text-white transition duration-200 hover:bg-green-600"
            onClick={() => (window.location.href = "/")}
          >
            Go to Home
          </button>
        </div>
        <div className=" flex items-center justify-center my-10">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full">
            <div className="bg-orange-300 px-6 py-4">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg font-semibold text-white">
                  Order Confirmation
                </h2>
                <span className="bg-white bg-opacity-20 text-orange-300 text-xs font-medium px-2.5 py-1 rounded-full">
                  Paid
                </span>
              </div>
              <p className="text-slate-200 text-sm mt-2">
                Thank you for your order!
              </p>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div>
                  <p className="text-slate-500 text-sm font-medium">
                    Order Number
                  </p>
                  <p className="text-slate-900 text-sm font-medium mt-2">
                    {data?.state?.key?.data?.unique_id}
                  </p>
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-medium">Date</p>
                  <p className="text-slate-900 text-sm font-medium mt-2">
                    June 15, 2025
                  </p>
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-medium">Total</p>
                  <p className="text-sm font-medium text-orange-300 mt-2">
                    ${data?.state?.key?.data?.cod_amount + 80}
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-xl p-4 mt-8">
                <h3 className="text-base font-medium text-slate-900 mb-6">
                  Shipping Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-slate-500 text-sm font-medium">
                      Customer
                    </p>
                    <p className="text-slate-900 text-sm font-medium mt-2">
                      {data?.state?.key?.data?.c_name}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium">
                      Shipping Method
                    </p>
                    <p className="text-slate-900 text-sm font-medium mt-2">
                      {data?.state?.key?.data?.courier}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium">
                      Address
                    </p>
                    <p className="text-slate-900 text-sm font-medium mt-2">
                      {data?.state?.key?.data?.address}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium">Phone</p>
                    <p className="text-slate-900 text-sm font-medium mt-2">
                      {data?.state?.key?.data?.c_phone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-xl p-4 mt-8">
                <h3 className="text-base font-medium text-slate-900 mb-6">
                  Order Summary
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <p className="text-sm text-slate-500 font-medium">
                      Subtotal
                    </p>
                    <p className="text-slate-900 text-sm font-semibold">
                      ${data?.state?.key?.data?.cod_amount}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm text-slate-500 font-medium">
                      Shipping
                    </p>
                    <p className="text-slate-900 text-sm font-semibold">
                      $80.00
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm text-slate-500 font-medium">Tax</p>
                    <p className="text-slate-900 text-sm font-semibold">$0</p>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-gray-300">
                    <p className="text-[15px] font-semibold text-slate-900">
                      Total
                    </p>
                    <p className="text-[15px] font-semibold text-orange-300">
                      ${data?.state?.key?.data?.cod_amount + 80}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
