import React from "react";
import bannerImage from "../assets/Images/VisaProcessing/Banner.jpg";
import CustomButton from "../components/CustomButton";
import VisaProcessingBackground from "../components/VisaProcessingBackground";
import VisaProcessingProgressBar from "../components/VisaProcessingProgressBar/ProgressBarPayment";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

// import Navbar from '../Navbar';
// import Footer from ;

const payment = {
        id: '1234ABCD',
        amount: 'Rs. 5000',
        total: 'Rs. 5000',
        paymentTime: '12:00 PM',
        paymentMethod: 'Visa',
        senderName: 'John Doe',
        referenceNumber: '1234ABCD',
};

const products = [
    {
      id: 1,
      title: 'Basic Tee',
      href: '#',
      price: '$32.00',
      color: 'Black',
      size: 'Large',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
    },
    // More products...
  ]

function VisaProcessingPaymentSuccessful() {
  const navigate = useNavigate();
  return (
    <VisaProcessingBackground>
      <VisaProcessingProgressBar />
      <h1 className="text-3xl font-bold mt-10">Payment</h1>
      <div className="relative z-2 text-white flex flex-col justify-center items-center p-8 t">
        <div className="space-y-12 mt-10 mb-10 lg:mt-0">
              <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="flex flex-col items-center justify-center text-center mt-5">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-600 group-hover:bg-green-800">
                        <CheckIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                    </span>
                    <h3 className="text-gray-900 text-2xl text-center font-bold m-5">
                        Payment Successful!
                    </h3>
                </div>
                <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex items-center justify-between">
                        <dt className="text-sm text-gray-900">Reference Number</dt>
                        <dd className="text-sm font-medium text-gray-900">{payment.referenceNumber}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                        <dt className="text-sm text-gray-900">Payment Time</dt>
                        <dd className="text-sm font-medium text-gray-900">{payment.paymentTime}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                        <dt className="text-sm text-gray-900">Payment Method</dt>
                        <dd className="text-sm font-medium text-gray-900">{payment.paymentMethod}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                        <dt className="text-sm text-gray-900">Sender Name</dt>
                        <dd className="text-sm font-medium text-gray-900">{payment.senderName}</dd>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                        <dt className="text-base font-medium text-gray-900">Total Payment</dt>
                        <dd className="text-base font-medium text-gray-900">{payment.total}</dd>
                    </div>
                </dl>
            </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <CustomButton
            text="Back to Home Page"
            backgroundColor="#0F6466"
            width="10rem"
            onClick={() => navigate("/Home")}
          />
        </div>
      </div>
        <p className="text-1xl text-center mb-10">
            Thank You!<br></br>
            Your application is currently under review.We appreciate your patience and will notify you as soon as the review process is complete
        </p>
    </VisaProcessingBackground>
  );
}

export default VisaProcessingPaymentSuccessful;
