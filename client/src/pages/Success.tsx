import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Success = () => {
  const location = useLocation();
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Extract the session_id from the query parameters
    const queryParams = new URLSearchParams(location.search);
    const sessionId = queryParams.get("session_id");

    if (sessionId) {
      // Verify the payment status with your backend
      axios
        .get(`https://alchemy-beta-server-3.onrender.com/api/orders/verify-payment?session_id=${sessionId}`)
        .then((response) => {
          setMessage("Payment successful! Thank you for your purchase.");
        })
        .catch((error) => {
          setMessage("Payment verification failed. Please contact support.");
        });
    } else {
      setMessage("Invalid session ID. Please contact support.");
    }
  }, [location.search]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Success!</h1>
      <p className="text-lg text-gray-700">{message}</p>
    </div>
  );
};

export default Success;