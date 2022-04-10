import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { destinationContext } from '../../App';
import './Navbar.css'


const Navbar = () => {
    const [loginuser, setLoginUser] = useContext(destinationContext);
    const handlesignout =()=>{
        setLoginUser({})
    }
 
    return (
        <div>
            <div className="navbars ">


                <ul >
                    <div className="container">
                        <li><Link to='' style={{ textDecoration: 'none', }} className='active '>Dhaka Raider</Link></li>

{               loginuser.email ?  <li style={{ float: 'right' }}><Link to='/login' style={{ textDecoration: 'none' }} className='active '> {loginuser.displayName}</Link></li>
:
""
        
        }
                        {/* <li style={{ float: 'right' }}><Link to='/login' style={{ textDecoration: 'none' }} className='active '>Login</Link></li> */}
                        {
                            loginuser.email ? <li style={{ float: 'right' }}><Link onClick={handlesignout} style={{ textDecoration: 'none' }} className='active '>Logout</Link></li>
                                : <li style={{ float: 'right' }}><Link to='/login' style={{ textDecoration: 'none' }} className='active '>Login</Link></li>
                        }
                        <li style={{ float: 'right' }}><Link to='/contact' style={{ textDecoration: 'none' }}>Contact</Link></li>
                        <li style={{ float: 'right' }}><Link to='/blog' style={{ textDecoration: 'none' }} >Blog</Link></li>
                        <li style={{ float: 'right' }}><Link to='/destination' style={{ textDecoration: 'none' }}>Destination</Link></li>
                        <li style={{ float: 'right' }}><Link to='/home' style={{ textDecoration: 'none' }} >Home</Link></li>



                    </div>


                </ul>
            </div>

        </div>
    );
};

export default Navbar;