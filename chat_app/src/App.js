import React, { useEffect } from "react";
import HeaderTop from "./Component/Bodys/HeaderTop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Component/Handle/Login";
import "./App.css";
import "antd/dist/antd.css";
import { ThemeProvides } from "./ThemeProvides";
import Loadding from "./Component/Loading/Loadding";
import HeaderCenter from "./Component/Bodys/HeaderCenter";
import Body from "./Component/Bodys/Body";

function App() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 500);
    return () => {};
  }, []);

  return (
    <ThemeProvides>
      {loading ? (
        <Loadding />
      ) : (
        <div>
          <div
            style={{
              maxWidth: "100%",
            }}
            className="bgrAll text-al-ct"
          >
            <img
              src="https://icms-image.slatic.net/images/ims-web/e525beb6-8dab-4e1f-8fef-971d592cf996.jpg"
              alt="hong"
            />
          </div>
          <div className="bgr_gray pd0_importan">
            <HeaderTop />
          </div>
          <HeaderCenter />
          
          <Switch>
            <Route exact path="/" component={Body} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      )}
    </ThemeProvides>
  );
}

export default App;
