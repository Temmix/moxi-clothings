import React, { useContext } from "react";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CurrentUserContext from "../../context/current-user/current-user.context";
import { CartContext } from "../../providers/cart/cart.provider";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import {
  HeadeContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink
} from "./header.styles";

const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  const { hidden } = useContext(CartContext);

  return (
    <HeadeContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <h1>MOXI CLOTHINGS</h1>
      <OptionsContainer>
        <OptionLink to="/shop"> SHOP </OptionLink>
        <OptionLink to="/shop"> CONTACT </OptionLink>
        {currentUser ? (
          <OptionDiv to="" onClick={() => auth.signOut()}>
            SIGN OUT{" "}
          </OptionDiv>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeadeContainer>
  );
};

export default Header;
