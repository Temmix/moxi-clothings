import React from "react";
import Directory from "../../src/components/directory/directory.component";
import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <h1>Welcome to Moxi Clothings</h1>
    <div className="directory-menu">
      <Directory />
    </div>
  </div>
);

export default HomePage;
