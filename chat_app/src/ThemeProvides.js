import React, { createContext, useRef } from "react";
import firebase, { auth } from "./Firebase/config";
import { useHistory } from "react-router-dom";
import { dataQA } from "./constants/data";
const ThemeContext = createContext();
const Google_provider = new firebase.auth.GoogleAuthProvider();

function ThemeProvides({ children }) {
  const history = useHistory();
  const [user, setUser] = React.useState(null);
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user?._delegate);
      if (user?._delegate) {
        history.push("/");
      }
    });
  }, [history]);
  const hanldeGoogle = () => { auth.signInWithPopup(Google_provider); };
  const hanldeGoogle_signOut = () => { auth.signOut(Google_provider); };

  // Truyền--------------------------------------------------------------------
  const ref = useRef();
  React.useEffect(() => {
    ref.current = products;
  }, [products]);

  const get_products = (value) => {
    const abc = ref.current?.map((word) => word.id === value.id);
    if (abc.find((element) => element === true)) {
      const objIndex = products.findIndex((obj) => obj.id === value.id);
      let newArr = [...products];
      const sl = newArr[objIndex].sl;
      newArr[objIndex].sl = sl ? sl + 1 : 2;
      setProducts(newArr);
    } else {
      setProducts((pev) => [...pev, Object.assign(value, { sl: 1 })]);
    }
  };
  const remove_products = (value) => { setProducts(products.filter((products) => products.id !== value.id)); };
  // ----------------------------------------------------------------------------------------------------
  const [data, setData] = React.useState([...dataQA])
  const [search, setSearch] = React.useState([])
  const [Pathname, setPathname] = React.useState()

  const value = {

    data,
    setData,

    search,
    setSearch,
    
    Pathname,
    setPathname,
    
    products,
    setProducts,
    get_products,
    remove_products,

    user,
    hanldeGoogle,
    hanldeGoogle_signOut,
    
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvides };
