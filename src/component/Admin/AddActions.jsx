import AdminNavbar from "./AdminNavbar";
import SideNavBar from "../side-navbar";
import { useState } from 'react';
import axios from 'axios';

const AddAction = () => {

    const [name,setName] = useState('');
    const [description, setDescription] = useState('');

    const changeName =(e)=>
    {
        setName(e.target.value);
    }
    const changeDesc =(e)=>{
        setDescription(e.target.value);
    }

  async function clickHandle(e)
    {
        e.preventDefault();
        try{
          console.log("Sample for testing try block");
          await axios.post("http://localhost:8080/actions/add",
          {
            
            name : name,
            decription : description
          });
          alert("Action Inserted :)");   
          setName("");
          setDescription("");       

        }catch(err)
        {
            alert("Failed :(");
        }
    }


    return ( 
        
    <><AdminNavbar/>
      <SideNavBar/>
        <div className=" pt-5 m-5 pb-5 "><h3 >Create Action</h3>
       <form className="col-lg-9 offset-md-3 pt-3 px-5">
       
         <div class="form-group row">
            <label class="col-sm-2 col-form-label">Action Name</label>
            <div class="col-sm-5">
                <input type="text" class="form-control" 
                onChange={changeName}
                value={name}  />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Description </label>
            <div class="col-sm-5">
                <input type="text" class="form-control"
                 onChange={changeDesc}
                 value = {description} />
            </div>
          </div>
       
         
       </form>
       <button onClick={clickHandle} className="btn btn-primary pl-4 pr-4" >ADD</button>
       </div>
       </>
     );
}
 
export default AddAction;