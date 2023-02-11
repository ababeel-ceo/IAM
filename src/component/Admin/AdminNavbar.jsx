import {Link} from 'react-router-dom';
// import {useState} from 'react';
// import { Navbar, Nav, NavDropdown, DropdownButton } from "react-bootstrap";
const styles = {
    navbar: {
        fontFamily: 'Roboto, sans-serif',
    },
  };

const AdminNavbar = () => {
    // const [title, setTitle] = useState("Dropdown");
    return ( 
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary" style={styles.navbar}>
        <Link className="navbar-brand" to="#">Identity and Access Management</Link>
        <ul className='navbar-nav ml-auto'>
        <li><Link to="/addmodule" className='nav-link'>Add Module</Link></li>
        <li><Link to="/addrole" className='nav-link'> Add Role</Link></li>
        <li><Link className='nav-link' to="/addaction">Add Action</Link></li>
        <li><Link className='nav-link' to="/"> Logout</Link></li>
        <li>

            {/* <NavDropdown title="Roles">
                <NavDropdown.Item>
                    Logout
                </NavDropdown.Item>

            </NavDropdown> */}
        </li>
       </ul>
    </nav> 
    </>
     );
}
 
export default AdminNavbar;