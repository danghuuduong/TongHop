import React from "react";
import HeaderTop from "../CpnHeader/HeaderTop";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Login from "../CpnHeader/Login";
function Home() {
  return (
    <>
      <BrowserRouter>
        <div>
          <div>
            <img src="https://icms-image.slatic.net/images/ims-web/fa0ba765-09bf-4518-8f55-b3328c122090.jpg" width={'100%'} height={'70px'}/>
          </div>
          <HeaderTop />
          <Routes>
            <Route exact strict path="/" element={ <div> 1123123123123213</div>} />
            <Route exact strict path="/phan2" element={<div>2</div>} />
            {/* <Route exact strict path="/login" element={ <Login /> } /> */}
          </Routes>
        </div>
    </BrowserRouter>
    </>
  );
}

export default Home;
