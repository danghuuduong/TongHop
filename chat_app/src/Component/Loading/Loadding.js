import React from "react";
import style from './Loadding.module.css';

function Loadding() {
  return (
    <div style={{ backgroundColor: 'black', width: '100%', height: '100vh' }}>
      <div className={style.ring} >
        Loading
        <span></span>
      </div>
    </div>

  );
}

export default Loadding;
