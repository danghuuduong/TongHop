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
import BreadCrumb from "./Component/Handle/BreadCrumb/BreadCrumb";
import Item from "antd/lib/list/Item";


const parameter = 'Thanh toán';

const data = [
  {
    id: 1,
    Object: 'cart',
    value: [
      {
        path: '/checkout/cart',
        name: 'Giỏ Hàng',
      },
      {
        path: '/payment',
        name: 'Thanh toán',
      }
    ]

  },
  {
    id: 2,
    Object: 'contact',
    value: [
      {
        path: '/contact',
        name: 'Hỗ Trợ khách hàng',
      }
    ]
  }
]
console.log("🙉🍀 __ data", data.filter(x => x.value.some(child => child.name === parameter)))



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


  return (
    <ThemeProvides>
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
          </Switch>
        </div>
      )}
    </ThemeProvides>

  );
}

export default App;
