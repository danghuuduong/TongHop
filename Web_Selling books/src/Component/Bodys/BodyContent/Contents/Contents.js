import React from "react";
import { ThemeContext } from "../../../../ThemeProvides";
import { List, Rate } from "antd";
import ConvertNVD from "../../../Handle/ConvertNVD";
import style from "./Contents.module.css";
import { NavLink } from "react-router-dom";

function Contents({ getNumberSearch }) {
  const Context = React.useContext(ThemeContext);
  const [dataPRD, setDataPRD] = React.useState([])
  const valueSearch = Context.search.slice(-1)[0]
  React.useEffect(() => {
    if (Context.data) {
      if (valueSearch) {
        const FilterSearch = Context.data.filter(item => item.title?.toLowerCase().includes(valueSearch?.toLowerCase()))
        setDataPRD(FilterSearch)
        getNumberSearch(FilterSearch.length)
      } else {
        setDataPRD(Context.data)
      }
    }

    return () => {

      const searchPage = window.location.pathname;
      if (searchPage === '/search') return ''
      Context.setSearch('')
    }
  }, [Context, getNumberSearch, valueSearch])


  const selectProduc = (x) => {
    Context.get_products(x);
  };

  return (
    <List
      pagination={{ onChange: (page) => { console.log(page); }, pageSize: 8 }}
      dataSource={dataPRD}
      grid={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4, }}
      renderItem={(x, i) => (
        <List.Item key={`products_${i}_${x.id}`} >

          <div className={style.production}>
            <NavLink end="true" to="/detail" onClick={() => {
              Context.setDetailpProducts(x)
            }}>
              <div className={style.production_img}>
                <img src={x.imgURl} alt="...error" style={{ maxWidth: "100%" }} />
                <span className={style.production_link}>
                  <button>
                    <i className="fas fa-eye" />
                  </button>
                </span>
              </div>
              <div style={{ overflow: "hidden", textOverflow: "ellipsis", height: 45, fontSize: 14, }} >
                {x.title}
              </div>
              <span className="text_pirive">
                <ConvertNVD money={x.prirce} />
              </span>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, }} >
                <Rate
                  allowHalf
                  disabled
                  defaultValue={x.star}
                  style={{ fontSize: 13, transform: "translateY(-2px)" }}
                />
                <span className={style.sold}>???? b??n 10,6k </span>
              </div>
            </NavLink>
            <button className={style.btn_add_cart}
              onClick={() => { selectProduc(x) }} >
              <i className="fas fa-cart-plus"></i> Th??m Gi??? h??ng
            </button>
          </div>

        </List.Item>
      )}
    />
  );
}

export default Contents;

//
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}