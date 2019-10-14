import React from "react";

import { VectorMap } from "react-jvectormap";

const mapData = {
  CN: 100000,
  IN: 9900,
  SA: 86,
  EG: 70,
  SE: 0,
  FI: 0,
  FR: 0,
  US: 20
};

const handleClick = (e, countryCode) => {
  console.log(countryCode);
};

const handleRegionClick = (e, countryCode) => {
  console.log(countryCode);
};

const handleRegionTipShow = (e, tip, code) => {
  console.log(code);
};

const Map = () => {
  return (
    <div>
      <VectorMap
        map={"world_mill"}
        backgroundColor="transparent" //change it to ocean blue: #0077be
        containerStyle={{
          width: "100%",
          height: "520px",
        }}
        onRegionClick={handleClick} //gets the country code
        //onRegionSelected={handleRegionClick}
        onRegionTipShow={handleRegionTipShow}
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "#ffffff",
            "fill-opacity": 0.4,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0
          },
          hover: {
            fill: "#03dac4",
            cursor: 'pointer'
          },
          selected: {
            fill: "#03dac4" //color for the clicked country
          }

        }}
        regionsSelectable={true}
      />
    </div>
  );
};
export default Map;