import React, { useEffect, useLayoutEffect } from "react";
import HeaderTop from "./Component/Bodys/BodyContent/HeaderTop/HeaderTop";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import { ThemeContext } from "./ThemeProvides";
import Loadding from "./Component/Loading/Loadding";
import HeaderCenter from "./Component/Bodys/BodyContent/HeaderCenter/HeaderCenter";
import Body from "./Component/Bodys/Body";
import ClickOncart from "./Component/Cart/ClickOncart/ClickOncart";
import BreadCrumb from "./Component/Handle/BreadCrumb/BreadCrumb";
import FooterC from "./Component/Bodys/FooterC";
import Search from "./Component/Bodys/Search";
import Detail from "./Component/Cart/Detail";

function App() {
  const [loading, setLoading] = React.useState(true);
  let { pathname } = useLocation();
  const history = useHistory();
  const Context = React.useContext(ThemeContext);
  useEffect(() => {
    Context.setPathname(pathname)
  }, [Context, pathname]);



  useLayoutEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history])

  useEffect(() => {

    var timeout;
    timeout = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => { clearTimeout(timeout); };
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
            <Route exact path="/search" component={Search} />
            <Route exact path="/detail" component={Detail} />
            <Route exact path="/checkout/cart" component={ClickOncart} />
          </Switch>
          <FooterC />

        </div>
      )}
    </React.Fragment>

  );
}

export default App;
