
import { Link } from 'react-router-dom';
const SideNavBar = () => {

    return ( 
       <div className="">

        
          <div className="sidebar bg-light pt-4">
            <Link to="/assignroles">Assign Roles </Link>
            <Link to="/assignactions">Assign Actions </Link>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          
          </div>


       </div>
     );
}
 
export default SideNavBar;