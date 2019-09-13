import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";

const MarketMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27652.730020237577!2d-90.12142469999999!3d29.962433699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1568386489759!5m2!1sen!2sus"
      width="100%"
      height="450"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen=""
    ></iframe>
  );
};

export default MarketMap;
