import React, { useContext } from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import CurrentUserContext from "../../context/current-user/current-user.context";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import {
  HeadeContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink
} from "./header.styles";

const Header = ({ hidden }) => {
  const currentUser = useContext(CurrentUserContext);
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
          <OptionDiv onClick={() => auth.signOut()}>SIGN OUT </OptionDiv>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeadeContainer>
  );
};

// state is the rootReducer for clarity.
// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser,
//   hidden: state.cart.hidden
// });

// note that createStructuredSelector will pull state and pass it
// into the selectCurrentUser and selectCartHidden selectors to do the needful
const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
