import React from "react";
import "./style.css";
function Loadding() {
  return (
    <div style={{ backgroundColor:'black', width:'100%',height:'100vh'}}>
      <div className="ring" >
            Loading
            <span></span>
          </div>
    </div>
    
  );
}

export default Loadding;
