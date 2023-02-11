import SideNavBar from "../side-navbar";
import AdminNavbar from "./AdminNavbar";
import { useState } from 'react';
import axios from 'axios';
const AddRole = () => {

    const [name,setName] = useState('');
    const changeName =(e)=>
    {
        setName(e.target.value);
    }
 
    
  async function clickHandle(e)
  {
      e.preventDefault();
      try{
        await axios.post("http://localhost:8080/role/addrole",
        {
          
          name : name,
          
        });
        alert("New Role Created !!!");    
        setName('');      

      }catch(err)
      {
          alert("Failed");
      }
  }

    return ( 
        <><AdminNavbar/>
        <SideNavBar/>
          <div className=" pt-5 m-5 pb-5 "><h3 >Create New Role</h3>
         <form className="col-lg-9 offset-md-3 pt-3 px-5">
         
           <div class="form-group row">
              <label class="col-sm-2 col-form-label">Role Name</label>
              <div class="col-sm-5">
                  <input type="text" class="form-control"
                  onChange={changeName}
                  value={name} />
              </div>
            </div>
           
           
         </form>
         <button className="btn btn-primary pl-4 pr-4" onClick={clickHandle}>ADD</button>
         </div>
         </>
     );
}
 
export default AddRole;