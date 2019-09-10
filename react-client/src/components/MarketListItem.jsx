import React from "react";
import { Col } from "reactstrap";

const MarketListItem = () => {
  return (
    <div className="market-list-item">
      <h3 className="market-title">Farmer's Market USA</h3>
      <p>
        <b>Hours:</b> 11:00 a.m. - 2:00 p.m.<br></br>
        <b>Location:</b> 123 Main St., Anytown USA 12345<br></br>
        <b>Website</b>
      </p>
    </div>
  );
};

export default MarketListItem;
