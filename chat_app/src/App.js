import React, { useContext, createContext, useEffect } from "react";
import HeaderTop from "./Component/CpnHeader/HeaderTop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Component/Handle/Login";
import "./App.css";
import "antd/dist/antd.css";
import { ThemeProvides } from "./ThemeProvides";
import Loadding from "./Component/Loading/Loadding";

function App() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 1000);
    return () => {};
  }, [loading]);

  return (
    <ThemeProvides>
      {loading ? (
        <Loadding />
      ) : (
        <div>
          <div
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            className="bgrAll text-al-ct"
          >
            <img
              src="https://icms-image.slatic.net/images/ims-web/e525beb6-8dab-4e1f-8fef-971d592cf996.jpg"
              alt="hong"
            />
          </div>
          <HeaderTop />
          <Switch>
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      )}
    </ThemeProvides>
  );
}

export default App;
