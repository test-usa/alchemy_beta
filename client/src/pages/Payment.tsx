import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";

const stripePromise = loadStripe("pk_test_51Qq9OPBFYajDRLyY9LandVIRaaAU9hFeHGdTNnpWAy8BMuAkU9g0Jlbmxmo3LwE6dvQ43QHPuVdGPm5BNFTmG8jq00xdmRZ848");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!stripe || !elements) return;

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: window.location.origin },
      redirect: "if_required",
    });

    if (error) {
      setError(error.message || "Payment failed.");
    } else if (paymentIntent?.status === "succeeded") {
        console.log(paymentIntent)
      setSuccess("Payment Successful!");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
      <PaymentElement />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-500 mt-2">{success}</p>}
      <Button type="submit" disabled={!stripe || loading} className="w-full mt-4">
        {loading ? "Processing..." : "Pay Now"}
      </Button>
    </form>
  );
};

const Payment = () => {
  const [clientSecret, setClientSecret] = useState("");

  const fetchClientSecret = async () => {
    const response = await fetch("https://alchemy-beta-server-3.onrender.com/api/orders/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 50, currency: "usd" }),
    });
    const data = await response.json();
    setClientSecret(data.clientSecret);
  };

  useState(() => {
    fetchClientSecret();
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Complete Payment</h2>
      {clientSecret && (
        <Elements options={{ clientSecret }} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
