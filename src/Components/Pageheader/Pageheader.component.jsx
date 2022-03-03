import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./Pageheader.styles.scss";

const PageHeader = ({ history, lightTheme, handleThemeToggle }) => {
  return (
    <header
      className={lightTheme ? "pageheader-wrapper" : "pageheader-wrapper dark"}
    >
      <h1 className='page-title' onClick={() => history.push("/")}>
        Where in the world?
      </h1>
      <button
        className='theme-btn'
        type='button'
        onClick={() => handleThemeToggle()}
      >
        <span className='theme-btn-icon'></span>
        <span className='theme-btn-text'>Dark Mode</span>
      </button>
    </header>
  );
};

export default withRouter(PageHeader);
