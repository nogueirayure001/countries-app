import React from "react";
import "./Loading.styles.scss";

const Loading = () => {
  return (
    <div className='loading-wrapper'>
      <div className='animation-wrapper'>
        <div className='ball-wrapper'>
          <div className='ball'></div>
        </div>

        <div className='ball-wrapper'>
          <div className='ball'></div>
        </div>

        <div className='ball-wrapper'>
          <div className='ball'></div>
        </div>

        <div className='ball-wrapper'>
          <div className='ball'></div>
        </div>

        <div className='ball-wrapper'>
          <div className='ball'></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
