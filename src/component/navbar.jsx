import React from 'react';
import { useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser} from '@fortawesome/free-solid-svg-icons';
// , faSignIn,faSignOut

const NavBar = () => {

    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    function handleLogout(){
        localStorage.clear();
        setIsLoggedIn(false);
        history.push('/login');
    }

  
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                <Link className="navbar-brand" to="#">Identity and Access Management</Link>
                <ul className='navbar-nav mr-auto'>
                <li>
                    <Link to="/" className='nav-link'><FontAwesomeIcon icon={faHome}/> Home</Link>
                    </li>
                <li>
                <Link to="/about" className='nav-link'><FontAwesomeIcon icon={faUser}/>  About</Link>
                    </li>
                    <li>
                    {{} && localStorage.getItem('auth')?
                     <>
                       <button  onClick={handleLogout}>Logout</button> 
                     </>:
                     <>
                        <Link  to="/login">Login</Link>
                     </>
    }
                    </li>
                </ul>
                </div>
            </nav> 
     );
}
 
export default NavBar;