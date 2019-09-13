import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Collection from "./collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selector";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionPageContainer;
