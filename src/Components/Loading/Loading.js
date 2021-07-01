import React from 'react';
import loadingImg from '../../Assets/Loading/Pinwheel.gif';
import './Loading.css';

function Loading() {
  return (
    <div className="loading">
      <div className="loading-content">
        <img src={loadingImg} alt="" />
        <h3>Loading...</h3>
      </div>
    </div>
  );
}

export default Loading;
