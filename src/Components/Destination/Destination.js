import React, { useContext, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// import Map from '../../images/Map.png';
import Navbar from '../Navbar/Navbar';
import { destinationContext } from '../../App';
import Map from '../Map/Map';
import Map2 from '../Map/Map2';


const Destination = () => {

    const history = useHistory();
 
    const [loginuser] = useContext(destinationContext);
    const [result, setResult] = useState({});
   




    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        setResult(data);
   
       

        // history.push("/result");
        history.push(
            {
                pathname: '/result',
               
                
                // state: {msg: `${data.pickform}`},
                state: {msg: `${data.pickform}`},
               data: {msg2: `${data.pickto}`}
               
            }
        );
        console.log(data);
    }
    console.log('our data', result);
    

    return (
        <div>
            <Navbar></Navbar>



            <h3 className="text-center"> Hello {loginuser.displayName}, <br></br> Please Enter Your Distance!</h3>
            <div className="row container mx-5   pt-5">
                <div className="col-md-5 bg-secondary h-50 p-3 rounded ">

                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="text-white ">Pick Form</label>

                        <input type="text" className="form-control  my-2" placeholder="Enter Your Current  location" required {...register("pickform", { required: true, maxLength: 80 })} />

                        <label className="text-white">Pick To</label>
                        <input type="text" className="form-control  my-2" placeholder="Enter where you wanna Go" required {...register("pickto", { required: true, maxLength: 100 })} />


                        <input className=" btn btn-warning  form-control my-3 " type="submit" value="Search" />
                    </form>



                </div>
                <div className="col-md-7 px-5 ">
                    {/* <img className="img-fluid  h-75" src={Map} alt="" /> */}
               
               <Map></Map>
               {/* <Map2></Map2> */}
                </div>
            </div>



        </div>
    );
};

export default Destination;