import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./ButtonLink.styles.scss";

const ButtonLink = ({
  identifier,
  history,
  icon,
  redirectToMain = false,
  lightTheme,
}) => {
  return (
    <button
      className={lightTheme ? "button-link" : "button-link dark"}
      type='button'
      onClick={
        redirectToMain
          ? () => history.push(`/`)
          : () => history.push(`/countries/${identifier}`)
      }
    >
      {icon ? (
        <span
          className='button-link-icon'
          style={{ backgroundImage: `url(${icon})` }}
        ></span>
      ) : null}
      {identifier}
    </button>
  );
};

export default withRouter(ButtonLink);
