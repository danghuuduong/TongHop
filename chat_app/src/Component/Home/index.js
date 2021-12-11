import React from "react";
import style from "./style.module.css";
import { Row, Container, Col } from "reactstrap";
import HeaderTop from "../CpnHeader/HeaderTop";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes
} from "react-router-dom";
function Home() {
  return (
    <>
      <BrowserRouter>
        <div>
          <HeaderTop />
          <Routes>
            <Route exact strict path="/phan1" element={ <div> 1</div>} />
            <Route exact strict path="/phan2" element={<div>2</div>} />
          </Routes>
        </div>
    </BrowserRouter>
    </>
  );
}

export default Home;
