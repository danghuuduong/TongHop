import React, { useEffect } from "react";
import HeaderTop from "./Component/Bodys/BodyContent/HeaderTop";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import { ThemeContext } from "./ThemeProvides";
import Loadding from "./Component/Loading/Loadding";
import HeaderCenter from "./Component/Bodys/BodyContent/HeaderCenter";
import Body from "./Component/Bodys/Body";
import ClickOncart from "./Component/Cart/ClickOncart";
import BreadCrumb from "./Component/Handle/BreadCrumb/BreadCrumb";
import FooterC from "./Component/Bodys/FooterC";
import Search from "./Component/Bodys/Search";

function App() {
  const [loading, setLoading] = React.useState(true);
  let { pathname } = useLocation();
  const Context = React.useContext(ThemeContext);
  useEffect(() => {
    Context.setPathname(pathname)
  }, [pathname]);

  useEffect(() => {

    var timeout;
    timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (

    <React.Fragment>
      {loading ? (
        <Loadding />
      ) : (
        <div className="bgr_gray">
          <div className="bgr_gray pd0_importan"> <HeaderTop />  </div>
          <div style={{ backgroundColor: '#fff' }}><HeaderCenter />  </div>

          <BreadCrumb />
          <Switch>
            <Route exact path="/" component={Body} />
            <Route exact path="/checkout/cart" component={ClickOncart} />
            <Route exact path="/search" component={Search} />
          </Switch>
          <FooterC />

        </div>
      )}
    </React.Fragment>

  );
}

export default App;
