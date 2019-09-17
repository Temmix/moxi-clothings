import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = token => {
  console.log(token);
  alert("Payment was successful");
};

const StripeCheckoutButton = ({ price, resetCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_A3xeVYv1QYnMVXv9I31ePwKj00XacYj3hp";

  return (
    <StripeCheckout
      label="Pay Now"
      name="Moxi Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is £${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      closed={() => resetCart()}
      stripeKey={publishableKey}
      currency="GBP"
    />
  );
};

export default StripeCheckoutButton;
