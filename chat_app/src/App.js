import React, { useEffect } from "react";
import HeaderTop from "./Component/Bodys/BodyContent/HeaderTop";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import { ThemeProvides } from "./ThemeProvides";
import Loadding from "./Component/Loading/Loadding";
import HeaderCenter from "./Component/Bodys/BodyContent/HeaderCenter";
import Body from "./Component/Bodys/Body";
import ClickOncart from "./Component/Cart/ClickOncart";

function App() {
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    var timeout;
    timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  const [numArray, setData] = React.useState([1, 5, 3, 0, -1])

  // console.log("🙉🍀 __ data", numArray.sort((a, b) => a - b))
  return (
    <ThemeProvides>
      {loading ? (
        <Loadding />
      ) : (
        <div>
          <div className="bgr_gray pd0_importan">
            <HeaderTop />
          </div>
          <HeaderCenter />
          <Switch>
            <Route exact path="/" component={Body} />
            <Route exact path="/checkout/cart" component={ClickOncart} />
          </Switch>
        </div>
      )}
    </ThemeProvides>

  );
}

export default App;
