import SideNavBar from "../side-navbar";
import AdminNavbar from './AdminNavbar';
import { useState } from 'react';
import UserList from './../userList';
const AssignRoles = () => {
    const [selectedUser, setSelectedUser] = useState("Option 1");
    const [selectedRole, setSelectedRole] = useState("Option 1");
    const options = ["Option 1", "Option 2", "Option 3"];
    return ( 
        <>
        <AdminNavbar/>
        <SideNavBar/>
        <div className=" pt-5 m-5 pb-5 "><h3 ></h3>
       <form className="col-lg-9 offset-md-3 pt-3 px-5">
         <div class="form-group row">
            <label class="col-sm-2 col-form-label">Select User</label>
            <div class="col-sm-5">
            {/* --------------------------------------------- */}
            <select className="form-control" value={selectedUser} onChange={(event) => setSelectedUser(event.target.value)}>
                {options.map((option) => (
                <option key={option} value={option}>
                {option}
                </option>
                 ))}
            </select>
          {/* ------------------------------------------------ */}
            </div>
          </div> 
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Select Role</label>
            <div class="col-sm-5">
        {/*------- ------------------------------------------ */}
        <select className="form-control" value={selectedRole} onChange={(event) => setSelectedRole(event.target.value)}>
                {options.map((option) => (
                <option key={option} value={option}>
                {option}
                </option>
                 ))}
            </select>
        {/* ------------------------------------------------- */}
            </div>
          </div>         
       </form>
       <button className="btn btn-primary pl-4 pr-4">Assign Roles</button>
       </div>
       </>
     );
}
 
export default AssignRoles;