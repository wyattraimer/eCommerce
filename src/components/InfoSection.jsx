import React from "react";
import {
  FaHeadset,
  FaLock,
  FaMoneyBillWave,
  FaShippingFast,
  FaTag,
} from "react-icons/fa";

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-3x1 text-red-600" />,
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset className="text-3x1 text-red-600" />,
      title: "Support 24/7",
      description: "We are here to assist you anytime",
    },
    {
      icon: <FaMoneyBillWave className="text-3x1 text-red-600" />,
      title: "100% Money Back",
      description: "Receive a full refund if you are not satisfied",
    },
    {
      icon: <FaLock className="text-3x1 text-red-600" />,
      title: "Secure Payment",
      description: "Your payment information is safe with us",
    },
    {
      icon: <FaTag className="text-3x1 text-red-600" />,
      title: "Discounts",
      description: "Enjoy the best prices on our products",
    },
  ];
  return (
    <div>
      <div>
        {infoItems.map((item, index) => {
          <div>
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>;
        })}
      </div>
    </div>
  );
};

export default InfoSection;
