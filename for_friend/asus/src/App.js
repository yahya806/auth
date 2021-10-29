import Login from "./screens/Login";
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from "./screens/Home";
import Register from "./screens/Register";
import { useEffect } from "react";
import { currentUser } from "./js/userSlice/userSlice";
import { useDispatch } from "react-redux";
import PrivateRoute from "./routes/PrivateRoute";
import Profile from "./screens/Profile";
function App() {
const isAuth=localStorage.getItem("token");
const dispatch = useDispatch();
  useEffect(() => {
  if(isAuth){
    dispatch(currentUser());
  }
  }, []);
  return (
    <div className="App">
      <Switch>
       <Route exact path='/' component={Home}/>
       
       <Route path='/register' component={Register}/>
       <Route path='/login' component={Login}/>
       <PrivateRoute component={Profile}/>
      </Switch>
    </div>
  );
}

export default App;
