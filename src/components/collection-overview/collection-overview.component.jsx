import React, { useContext } from "react";

import CollectionPreview from "../collection-preview/collection-preview.component";
import CollectionsContext from "../../context/collection/collection.context";
import "./collection-overview.styles.scss";

const CollectionOverview = () => {
  const objCollections = useContext(CollectionsContext);
  const collections = Object.keys(objCollections).map(
    key => objCollections[key]
  );

  return (
    <div className="colletions-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
