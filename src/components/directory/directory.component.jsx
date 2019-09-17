import React, { useContext } from "react";
import DirectoryContext from "../../context/directory/directory.context";
import MenuItem from "../menu-item/menu-item.components";

import "./directory.styles.scss";

const Directory = () => {
  const sections = useContext(DirectoryContext);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
