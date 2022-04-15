
import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Destination from './Components/Destination/Destination';
import Login from './Components/Login/Login';
import DestinationResult from './Components/DestinationResult/DestinationResult';
import { createContext, useState } from 'react';

import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Register from './Components/Login/Register';
import Map2 from './Components/Map/Map2';
//map box 
import 'mapbox-gl/dist/mapbox-gl.css';

export const destinationContext = createContext();
export const DataContext = createContext();
function App() {
  // const [details,setDetails] =useState({});
  const [loginuser, setLoginUser] = useState({});
  const [loginuser2, setLoginUser2] = useState({});

  return (

    <destinationContext.Provider value={[loginuser, setLoginUser]} >
      <DataContext.Provider value={[loginuser2, setLoginUser2]} >


        <Router>
          <Switch>

            {/* <Route path="/destination">
          <Destination></Destination>
        </Route> */}
            <PrivateRoute path="/destination">
              <Destination></Destination>
            </PrivateRoute>
           
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/result">

              <DestinationResult></DestinationResult>
            </PrivateRoute>
            <Route path="/">
              <Home></Home>
            </Route>

          </Switch>

        </Router>
      

      </DataContext.Provider>
    </destinationContext.Provider>


  );
}

export default App;
