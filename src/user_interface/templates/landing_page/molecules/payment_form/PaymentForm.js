import React, { memo } from "react";
import {
  useStripe,
  useElements,
  CardElement,
  Elements,
} from "@stripe/react-stripe-js";
import "./PaymentForm.css";
import { loadStripe } from "@stripe/stripe-js";
import { useAdaptiveResponsiveContext } from "../../../../../business_logic/wrappers/AdaptiveResponsive";

const stripePromise = loadStripe("your-public-key-here");

const CardForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const card = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });

    if (error) {
      console.error("[Payment Error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);

      // Optionally send the paymentMethod.id to your backend
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: { fontSize: "16px" },
            invalid: { color: "#9e2146" },
          },
          hidePostalCode: true,
        }}
        className="card-element"
      />
      <button type="submit" disabled={!stripe} className="payment-button">
        Zaplatit 10 000 kč
      </button>
    </form>
  );
};

function PaymentForm() {
  const { device } = useAdaptiveResponsiveContext();

  return (
    <div className={`payment-form ${device === "mobile" ? "mobile" : ""}`}>
      <Elements stripe={stripePromise}>
        <CardForm />
      </Elements>
    </div>
  );
}

export default memo(PaymentForm);
