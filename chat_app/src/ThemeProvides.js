import React, { createContext } from "react";
import firebase, { auth } from "./Firebase/config";
import { useHistory } from "react-router-dom";
const ThemeContext = createContext();
const Google_provider = new firebase.auth.GoogleAuthProvider();

function ThemeProvides({ children }) {
  const [user, setUser] = React.useState(null);
  const history = useHistory();

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user?._delegate);
      history.push("/");
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
  const value = {
    user,
    hanldeGoogle,
    hanldeGoogle_signOut,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvides };
