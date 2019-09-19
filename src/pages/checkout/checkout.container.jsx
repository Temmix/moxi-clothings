import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import CheckoutPage from "./checkout.component";

const GET_CART_ITEMS_AND_TOTAL = gql`
  {
    cartItems @client
    itemTotal @client
  }
`;

// cartItems, total
const CheckoutContainer = () => (
  <Query query={GET_CART_ITEMS_AND_TOTAL}>
    {({ data: { cartItems, itemTotal } }) => (
      <CheckoutPage cartItems={cartItems} itemTotal={itemTotal} />
    )}
  </Query>
);

export default CheckoutContainer;
