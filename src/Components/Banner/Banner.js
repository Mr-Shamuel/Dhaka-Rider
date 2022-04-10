import React, { useContext } from 'react';
import bike from '../../images/Frame.png';
import car from '../../images/Frame-2.png';
import bus from '../../images/Frame-1.png';
import train from '../../images/Group.png';
import './Banner.css'
import { DataContext, destinationContext } from '../../App';
import { useHistory } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Banner = () => {
    const [loginuser] = useContext(destinationContext);
    const [loginuser2, setLoginUser2] = useContext(DataContext);
    
    const history = useHistory();
    // const location = useLocation();
    const handleClick = (e) => {
        const field = e.target.value;
        setLoginUser2(field);
        console.log(loginuser2);
        history.push( "/destination");
        e.preventDefault();

    }
    return (
        <div className=" d-flex align-items-center align-middle  justify-content-center mt-5 pt-5">
            
            
            <div className="pt-5 mt-5 banner" >
 {
     loginuser.email &&            <h3 className="py-3 text-center   ">Welcome, {loginuser.displayName}</h3>
 }
            <Link to="/destination" name="Bike" value="Bike" onClick={handleClick} className="btn btn-outline-success  p-2 m-2"> <img src={bike} alt="bike" />  <input className="form-control" type="submit" name="Bike" value="Bike"></input> </Link>
            <Link to="/destination" name="Car" value="Car" onClick={handleClick} className="btn btn-outline-success  p-2 m-2"> <img src={car} alt="bike" />  <input className="form-control" type="submit" name="Car" value="Car"></input> </Link>
            <Link to="/destination" name="Bus" value="Bus" onClick={handleClick} className="btn btn-outline-success  p-2 m-2"> <img src={bus} alt="bike" />  <input className="form-control" type="submit" name="Bus" value="Bus"></input> </Link>
            <Link to="/destination" name="Train" value="Train" onClick={handleClick} className="btn btn-outline-success  p-2 m-2"> <img src={train} alt="bike" />  <input className="form-control" type="submit" name="Train" value="Train"></input> </Link>
               
                {/* <button onClick={handleClick} name="bike" value="Bike" className="btn btn-primary m-2 p-2 text-dark bg-light"><img className="p-3 " src={bike} alt="bike" />Bike </button>
                <button onClick={handleClick} name="car" value="Car" className="btn btn-primary m-2 p-2 text-dark bg-info"><img className="p-3" src={car} alt="bike" />Car</button>
                <button onClick={handleClick} name="bus" value="Bus" className="btn btn-primary m-2 p-2 text-dark bg-success"><img className="p-3" src={bus} alt="bike" />Bus </button>
                <button onClick={handleClick} name="train" value="Train" className="btn btn-primary m-2 p-2 text-dark bg-warning"><img className="p-3" src={train} alt="bike" />Train </button> */}

                {/* <Link to="/destination" onClick={handleClick} className="btn btn-outline-success p-2 m-2"> <img src={train} alt="train" />  <input className="form-control" type="submit" name="transport" value="train"></input>  </Link> */}

            </div>


        </div>

    );
};

export default Banner;