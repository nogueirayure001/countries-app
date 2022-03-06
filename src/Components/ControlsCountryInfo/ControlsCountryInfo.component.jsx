import React from "react";
import ButtonLink from "../ButtonLink/ButtonLink.component";
import "./ControlsCountryInfo.styles.scss";
import leftArrow from "../../icons/left-arrow.svg";

const ControlsCountryInfo = ({ lightTheme }) => {
  return (
    <div className='controls-country-info'>
      <ButtonLink
        identifier={"Back"}
        icon={leftArrow}
        redirectToMain={true}
        lightTheme={lightTheme}
      />
    </div>
  );
};

export default ControlsCountryInfo;
