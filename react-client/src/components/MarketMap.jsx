import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

class MarketMap extends Component {
  componentDidMount() {
    this.map = L.map("map", {
      center: this.props.location,
      zoom: 15,
      zoomControl: true
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.circle(this.props.location).addTo(this.map);

    //const marketInfo  = this.props.marketInfo;
    //console.log(marke[0].GoogleLink.split("="));

    const createMarketMarkers = () => {
      this.props.market.map((obj) => {
        let link = obj.GoogleLink.split("=");
        let newLink = link[1].split("%");
        let long = newLink[2].split("20");
        let coords = [];
        coords.push(newLink[0], long[1]);
        console.log(coords);
        L.circle(coords).addTo(this.map);
      })
    }
    createMarketMarkers(this.props.market);
  }

  render() {
    return <Wrapper width="100%" height="400px" id="map" className="mb-3" />;
  }
}

export default MarketMap;