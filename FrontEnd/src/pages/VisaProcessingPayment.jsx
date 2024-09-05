import React from "react";
import bannerImage from "../assets/Images/VisaProcessing/Banner.jpg";
import CustomButton from "../components/CustomButton";
import VisaProcessingBackground from "../components/VisaProcessingBackground";
import VisaProcessingProgressBar from "../components/VisaProcessingProgressBar/ProgressBarPayment";

// import Navbar from '../Navbar';
// import Footer from ;

function VisaProcessingPayment() {
  return (
    <VisaProcessingBackground>
      <VisaProcessingProgressBar />
      <h1 className="text-3xl font-bold mt-10">Payment</h1>
      <form
        style={{
          position: "relative",
          zIndex: 2,
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
        className="t"
      >
        <div className="space-y-12">
          <h1 className="text-2xl font-bold text-left">Payment Information</h1>
          <div className="grid grid-cols-3 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12">
            {/* First Column */}
            <div className="col-span-2">
              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="card_number"
                    className="block text-sm font-medium leading-6 text-left"
                  >
                    Card Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="card_number"
                      placeholder="XXXX-XXXX-XXXX-XXXX"
                      name="card_number"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-left"
                  >
                    Expiry Date
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-left"
                  >
                    CVV
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="XXX"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-left"
                  >
                    Card Holder Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="John Doe"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Second Column */}
            <div className="col-span-1 bg-white bg-opacity-75 text-black shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl px-4 py-6 sm:p-8">
              <div className="sm:col-span-4">
                <label
                  htmlFor="card_number"
                  className="block text-sm font-medium leading-6 text-left"
                >
                  Payment Number
                </label>
                <div className="mt-2">
                  <input
                    id="payment_number"
                    name="payment_number"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="card_number"
                  className="block text-sm font-medium leading-6 text-left"
                >
                  Order Amount
                </label>
                <div className="mt-2">
                  <input
                    id="card_number"
                    name="card_number"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="card_number"
                  className="block text-sm font-medium leading-6 text-left"
                >
                  Total Amount
                </label>
                <div className="mt-2">
                  <input
                    id="card_number"
                    name="card_number"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <CustomButton
            text="Clear All"
            backgroundColor="#0F6466"
            width="10rem"
          />
          <CustomButton
            text="Make Payment"
            backgroundColor="#0F6466"
            width="10rem"
          />
        </div>
      </form>
    </VisaProcessingBackground>
  );
}

export default VisaProcessingPayment;
