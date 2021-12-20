import React, { createContext, useRef } from "react";
import firebase, { auth } from "./Firebase/config";
import { useHistory } from "react-router-dom";
const ThemeContext = createContext();
const Google_provider = new firebase.auth.GoogleAuthProvider();

function ThemeProvides({ children }) {
  const history = useHistory();
  const [user, setUser] = React.useState(null);
  const [products, setProducts] = React.useState([]);
  console.log("🙉🍀 __ products1", products);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user?._delegate);
      if (user?._delegate) {
        history.push("/");
      }
    });
  }, []);
  const hanldeGoogle = () => {
    auth.signInWithPopup(Google_provider);
  };

  const hanldeGoogle_signOut = () => {
    auth.signOut(Google_provider);
    history.push("/login");
  };

  // Truyền--------------------------------------------------------------------
  const ref = useRef();
  React.useEffect(() => {
    ref.current = products;
  }, [products]);
  // const [sl,setSL] = useState (0)

  const get_products = (value) => {
    const abc = ref.current?.map((word) => word.id === value.id);
    if (abc.find((element) => element === true)) {
      const objIndex = products.findIndex((obj) => obj.id === value.id);
      let newArr = [...products];
      const sl = newArr[objIndex].sl;
      newArr[objIndex].sl = sl ? sl + 1 : 2;
      setProducts(newArr);
    } else {
      setProducts((pev) => [...pev, value]);
    }
  };
  const value = {
    user,
    hanldeGoogle,
    hanldeGoogle_signOut,
    get_products,
    products,
    setProducts,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvides };
