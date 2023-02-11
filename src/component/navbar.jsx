import React from 'react';
import { useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faSignIn, faSignOut,  faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';





// , faSignIn,faSignOut

const NavBar = () => {

    const[login, setlogin] = useState(false);

    useEffect(()=>
    {
        if(localStorage.getItem('auth'))
        {
            setlogin(true);
        }
    },[login])

    

  
    return ( 
                
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="#">Identity and Access Management</Link>
        <ul className='navbar-nav mr-auto'>
        <li><Link to="/" className='nav-link'><FontAwesomeIcon icon={faHome}/> Home</Link></li>
        <li><Link to="/about" className='nav-link'><FontAwesomeIcon icon={faUser}/>  About</Link></li>
        <li><Link className='nav-link' to="/login"><FontAwesomeIcon icon={faSignIn}/> Login</Link></li>
        <li><Link className='nav-link' to="/register"><FontAwesomeIcon icon={faUserPlus}/> Register</Link></li>
       </ul>
    </nav> 
          
     );
}
 
export default NavBar;