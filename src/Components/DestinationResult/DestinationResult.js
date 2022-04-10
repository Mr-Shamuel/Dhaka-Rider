import React, { useContext} from 'react';
import Navbar from '../Navbar/Navbar';
import Map from '../../images/Map.png';
import bus from '../../images/Frame-1.png';
import car from '../../images/Frame-2.png';
import bike from '../../images/Frame.png';
import people from '../../images/peopleicon.png';
import train from '../../images/Group.png';
import './DestinationResult.css';
import { useLocation } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { DataContext } from '../../App';



const DestinationResult = () => {
    const [loginuser2] = useContext(DataContext);
    const location = useLocation();
    const From = (location.state).msg;
    const To = (location.data).msg2;

    return (
        <div>
            <Navbar></Navbar>


            <div className="row container   pt-5">
            <h3>Your Final  Destination is : </h3>
                <div className="col-md-5 bg-secondary h-50 p-3 rounded ">
              
                    <div className="range p-3 mb-3  ">
                        <h5> <LocationOnIcon></LocationOnIcon> {From}</h5>
                        <h5 className="px-3"> To</h5>

                        <h5> <AddLocationIcon></AddLocationIcon>{To}</h5>
                    </div>

                    <div className="row bg-light xx rounded mx-1 my-3 text-center ">
                        {


                            (loginuser2 === 'Car') && <div className="col-md-10  p-3  ">

                                <img  style={{ width: "30px", height: "30px",margin:'20px' }} src={car} alt="" /> <span className="mx-2">{loginuser2}</span> <img style={{ width: "20px", height: "20px" }} src={people} alt="" /> 1 <span className="mx-3">$25</span>
                                <br />
                           
                                <img style={{ width: "30px", height: "30px" ,margin:'20px'}} src={car} alt="" /> <span className="mx-2">{loginuser2}</span> <img style={{ width: "20px", height: "20px" }} src={people} alt="" /> 2 <span className="mx-3">$50</span>
                                <br />
                                <img style={{ width: "30px", height: "30px" ,margin:'20px'}} src={car} alt="" /> <span className="mx-2">{loginuser2}</span> <img style={{ width: "20px", height: "20px" }} src={people} alt="" /> 4 <span className="mx-3">$85</span>
                            </div>

                        }


                        {


                            (loginuser2 === 'Bus') && <div className="col-md-10  p-3">

                                <img style={{ width: "30px", height: "30px",margin:'20px' }} src={ bus} alt="" /> <span className="mx-2">{loginuser2}</span> <img style={{ width: "20px", height: "20px" }} src={people} alt="" /> 1  <span className="mx-3" >$50</span>
                                <br />
                                <img style={{ width: "30px", height: "30px",margin:'20px' }} src={ bus} alt="" /> <span className="mx-2">{loginuser2}</span> <img style={{ width: "20px", height: "20px" }} src={people} alt="" /> 2 <span className="mx-3" >$75</span>
                                <br />
                                <img style={{ width: "30px", height: "30px",margin:'20px' }} src={ bus} alt="" /> <span className="mx-2">{loginuser2}</span> <img style={{ width: "20px", height: "20px" }} src={people} alt="" /> 4 <span className="mx-3">$100</span>
                            </div>

                        }
                        {


                            (loginuser2 === 'Bike') && <div className="col-md-10  p-3">

                                <img style={{ width: "30px", height: "30px",margin:'20px' }} src={  bike} alt="" /> <span className="mx-2">{loginuser2}</span> <img style={{ width: "20px", height: "20px" }} src={people} alt="" /> 1 <span className="mx-3">$25</span>
                                <br />
                                <img style={{ width: "30px", height: "30px",margin:'20px' }} src={  bike} alt="" /> <span className="mx-2">{loginuser2}</span> <img style={{ width: "20px", height: "20px" }} src={people} alt="" /> 2 <span className="mx-3">$50</span>
                                <br />
                                <img style={{ width: "30px", height: "30px" ,margin:'20px'}} src={  bike} alt="" /> <span className="mx-2">{loginuser2}</span> <img style={{ width: "20px", height: "20px" }} src={people} alt="" /> 4 <span className="mx-3">$75</span>
                            </div>

                        }
                        {


                            (loginuser2 === 'Train') && <div className="col-md-10  p-3 ">

                                <img style={{ width: "30px", height: "30px",margin:'20px' }} src={  train} alt="" /> <span className="mx-2">{loginuser2}</span> <img style={{ width: "20px", height: "20px" }} src={people} alt="" /> 1 <span className="mx-3">$25</span>
                                <br />
                                <img style={{ width: "30px", height: "30px",margin:'20px' }} src={  train} alt="" /> <span className="mx-2">{loginuser2}</span> <img style={{ width: "20px", height: "20px" }} src={people} alt="" /> 2 <span className="mx-3">$45</span>
                                <br />
                                <img style={{ width: "30px", height: "30px",margin:'20px' }} src={  train} alt="" /> <span className="mx-2">{loginuser2}</span> <img style={{ width: "20px", height: "20px" }} src={people} alt="" /> 4 <span className="mx-3">$65</span>
                            </div>

                        }



                
                    </div>

                    {/* <div className="row bg-light xx rounded mx-1 my-3  ">
                        <div className="col-md-10  p-3">
                            <img style={{ width: "30px", height: "30px" }} src={bus} alt="" /> <span className="mx-2">{loginuser2}</span> <img style={{ width: "20px", height: "20px" }} src={people} alt="" /> 2
                        </div>
                        <div className="col-md-2 xx p-3">
                            $50
                        </div>
                    </div> */}

                    {/* <div className="row bg-light xx rounded mx-1 my-3  ">
                        <div className="col-md-10  p-3">
                            <img style={{ width: "30px", height: "30px" }} src={bus} alt="" /> <span className="mx-2">{loginuser2}</span> <img style={{ width: "20px", height: "20px" }} src={people} alt="" /> 4
                        </div>
                        <div className="col-md-2 xx p-3">
                            $85
                        </div>
                    </div> */}




                </div>
                <div className="col-md-7 px-5 ">
                    <img className="img-fluid  h-75" src={Map} alt="" />
                </div>
            </div>


        </div>
    );
};

export default DestinationResult;