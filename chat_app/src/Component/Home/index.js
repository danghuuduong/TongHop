import React from "react";
import HeaderTop from "../CpnHeader/HeaderTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../CpnHeader/Login";
function Home() {
  return (
    <>
      <BrowserRouter>
        <div>
          <div
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            className="bgrAll text-al-ct"
          >
            <img src="https://icms-image.slatic.net/images/ims-web/e525beb6-8dab-4e1f-8fef-971d592cf996.jpg" />
          </div>
          <HeaderTop />
          <Routes>
            <Route exact strict path="/" element={<Login />} />
            <Route exact strict path="/phan2" element={<div>2</div>} />
            {/* <Route exact strict path="/login" element={ <Login /> } /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Home;
