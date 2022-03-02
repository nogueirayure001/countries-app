import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./ButtonLink.styles.scss";

const ButtonLink = ({ identifier, history, icon, redirectToMain = false }) => {
  const buttonWithIcon = (
    <button
      className='button-link'
      type='button'
      onClick={() => history.push(`/countries/${identifier}`)}
    >
      <span
        className='button-link-icon'
        style={{ backgroundImage: `url(${icon})` }}
      ></span>{" "}
      {identifier}
    </button>
  );

  const buttonWithoutIcon = (
    <button
      className='button-link'
      type='button'
      onClick={() => history.push(`/countries/${identifier}`)}
    >
      {identifier}
    </button>
  );

  const buttonWithIconRedirect = (
    <button
      className='button-link'
      type='button'
      onClick={() => history.push(`/`)}
    >
      <span
        className='button-link-icon'
        style={{ backgroundImage: `url(${icon})` }}
      ></span>{" "}
      {identifier}
    </button>
  );

  const buttonWithoutIconRedirect = (
    <button
      className='button-link'
      type='button'
      onClick={() => history.push(`/`)}
    >
      {identifier}
    </button>
  );

  if (!redirectToMain) {
    return icon ? buttonWithIcon : buttonWithoutIcon;
  } else {
    return icon ? buttonWithIconRedirect : buttonWithoutIconRedirect;
  }
};

export default withRouter(ButtonLink);
