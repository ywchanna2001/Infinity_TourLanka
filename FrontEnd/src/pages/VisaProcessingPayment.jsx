import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import VisaProcessingBackground from "../components/VisaProcessingBackground";
import VisaProcessingProgressBar from "../components/VisaProcessingProgressBar/ProgressBarPayment";
import { useNavigate } from "react-router-dom";

// import Navbar from '../Navbar';
// import Footer from ;

const payment = {
      id: '1234ABCD',
      amount: 'Rs. 5000',
      total: 'Rs. 5000',
};

function VisaProcessingPayment() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      card_number: "",
      expiry_date: "",
      cvv: "",
      card_holder_name: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
    
        if (!formData.card_number || !/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(formData.card_number)) {
          formErrors.card_number = "Card number is invalid. Use format XXXX-XXXX-XXXX-XXXX";
        }
        if (!formData.expiry_date || !/^\d{2}\/\d{2}$/.test(formData.expiry_date)) {
          formErrors.expiry_date = "Expiry date is invalid. Use format MM/YY";
        }
        if (!formData.cvv || !/^\d{3}$/.test(formData.cvv)) {
          formErrors.cvv = "CVV must be 3 digits";
        }
        if (!formData.card_holder_name) {
          formErrors.card_holder_name = "Card holder name is required";
        }
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          navigate("/VisaProcessingPaymentSuccessful");
        }
    };

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
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                      value={formData.card_number} 
                      onChange={handleInputChange}  
                    />
                        {errors.card_number && <p className="text-red-500 text-sm">{errors.card_number}</p>}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="expiry_date"
                    className="block text-sm font-medium leading-6 text-left"
                  >
                    Expiry Date
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      name="expiry_date"
                      id="expiry_date"
                      value={formData.expiry_date}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                    />
                        {errors.expiry_date && <p className="text-red-500 text-sm">{errors.expiry_date}</p>}
                    </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="cvv"
                    className="block text-sm font-medium leading-6 text-left"
                  >
                    CVV
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="XXX"
                      name="cvv"
                      id="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                    />
                        {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
                    </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="card_holder_name"
                    className="block text-sm font-medium leading-6 text-left"
                  >
                    Card Holder Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="card_holder_name"
                      name="card_holder_name"
                      placeholder="John Doe"
                      value={formData.card_holder_name}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                    />
                        {errors.card_holder_name && <p className="text-red-500 text-sm">{errors.card_holder_name}</p>}
                  </div>
                </div>
              </div>
            </div>

            {/* Second Column */}
            <div className="col-span-1 bg-white bg-opacity-75 text-black shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl px-4 py-6 sm:p-8">
              <div className="sm:col-span-4 border-b border-gray-100 py-3 text-center">
                <label
                  htmlFor="card_number"
                  className="block text-sm font-medium leading-6 text-left"
                >
                  Payment Number
                </label>
                <div className="mt-2">
                    <p className="block text-m font-medium leading-6 text-center text-gray-600">{payment.id}</p>
                </div>
              </div>
              <div className="sm:col-span-4 border-b border-gray-100 py-3 text-center">
                <label
                  htmlFor="card_number"
                  className="block text-sm font-medium leading-6 text-left"
                >
                  Payment Amount
                </label>
                <div className="mt-2">
                    <p className="block text-m font-medium leading-6 text-center text-gray-600">{payment.amount}</p>
                </div>
              </div>
              <div className="sm:col-span-4 border-b border-gray-100 py-3 text-center">
                <label
                  htmlFor="card_number"
                  className="block text-sm font-medium leading-6 text-left"
                >
                  Total Payment
                </label>
                <div className="mt-2">
                    <p className="block text-m font-medium leading-6 text-center text-gray-600">{payment.total}</p>
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
            onClick={() => setFormData({
                card_number: "",
                expiry_date: "",
                cvv: "",
                card_holder_name: "",
              })}
            type="reset"
          />
          <CustomButton
            text="Make Payment"
            backgroundColor="#0F6466"
            width="10rem"
            type="submit"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </VisaProcessingBackground>
  );
}

export default VisaProcessingPayment;
