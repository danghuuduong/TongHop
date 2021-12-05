import './App.css';
import 'antd/dist/antd.css';
import Login from './Component/Login';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes >
        <Route component={Login} path="/login" />
      </Routes>
    </Router>
    
  );
}

export default App;
