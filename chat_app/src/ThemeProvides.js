import React, { createContext,useRef } from "react";
import firebase, { auth } from "./Firebase/config";
import { useHistory } from "react-router-dom";
const ThemeContext = createContext();
const Google_provider = new firebase.auth.GoogleAuthProvider();

function ThemeProvides({ children }) {
  const history = useHistory();
  const [user, setUser] = React.useState(null);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user?._delegate);
      if(user?._delegate){
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
 const ref = useRef()
 const quantity = useRef(2)
 React.useEffect( ()=>{
   ref.current=products
  },[products])
  // const [sl,setSL] = useState (0)
 
 const get_products = (value) =>{
   const abc = ref.current?.map(word => word.id === value.id)

   if ( abc.find(element => element === true)) {
     const abc = products.filter( x => x.id === value.id)
     
     console.log("🙉🍀 --> abc",   Object.assign(abc[0], {quantity:quantity.current++} ))
    
   }else{
     setProducts( pev => [...pev,value])
   }
  }
  const value = {
    user,
    hanldeGoogle,
    hanldeGoogle_signOut,
    get_products,
    products,
    setProducts
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvides };
