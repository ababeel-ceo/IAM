import SideNavBar from "../side-navbar";
import AdminNavbar from './AdminNavbar';
import axios from "axios";
import { useState } from "react";

const AddModule = () => {

    const [name,setName] = useState('');
    const jwtToken = localStorage.getItem('jwtToken');
    

    const changeName =(e)=>
    {
        setName(e.target.value);
    }
      

    // const headers = {
    //   'Authorization': `Bearer ${jwtToken}`,
    //   'Content-Type': 'application/json'
    // };

  axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;

  async function clickHandle(e)
  {
      e.preventDefault();
      try{
        await axios.post("http://localhost:8080/modules/add",
        {
          modulename : name
        });
        // "{headers}");
        alert("New Module Created !!!");    
        setName('');      

      }catch(err)
      {
          alert("Failed");
      }
  }


    return ( 
      <><AdminNavbar/>
      <SideNavBar/>
        <div className=" pt-5 m-5 pb-5 "><h3 >Create New Module</h3>
       <form className="col-lg-9 offset-md-3 pt-3 px-5">
       
         <div class="form-group row">
            <label class="col-sm-2 col-form-label">Module Name</label>
            <div class="col-sm-5">
                <input type="text" class="form-control" 
                value={name}
                onChange={changeName}
                />
            </div>
          </div>
          {/* <div class="form-group row">
            <label class="col-sm-2 col-form-label">Select Status </label>
            
            <div class="col-sm-5">
               <select className="form-control" name="" id="">
                <option value="">Active</option>
                <option value="">Inactive</option>
               </select>
            </div>
          </div> */}
         
       </form>
       <button className="btn btn-primary pl-4 pr-4" onClick={clickHandle}>ADD</button>
       </div>
       </>
     );
}
 
export default AddModule;