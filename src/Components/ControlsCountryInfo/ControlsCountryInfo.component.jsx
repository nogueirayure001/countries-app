import React from "react";
import ButtonLink from "../ButtonLink/ButtonLink.component";
import "./ControlsCountryInfo.styles.scss";

const ControlsCountryInfo = ({ lightTheme }) => {
  return (
    <div className='controls-country-info'>
      <ButtonLink
        identifier={"Back"}
        icon={"../../icons/left-arrow.svg"}
        redirectToMain={true}
        lightTheme={lightTheme}
      />
    </div>
  );
};

export default ControlsCountryInfo;
