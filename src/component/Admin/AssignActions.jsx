import AdminNavbar from './AdminNavbar';
import SideNavBar from './../side-navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
const AssignAction = () => {

   
    
    const [modules, setModules] = useState([]);
    const [selectModule,setSelectModule] = useState('');
    const [actions, setAction] = useState([]);
    const [selectAction, setSelectAction] = useState('');
 
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get('http://localhost:8080/modules/list');
      
        setModules(result.data);
        console.log(result.data);
      };
      fetchData();

      const fetchAction = async ()=>{
        const res = await axios.get("http://localhost:8080/actions/list");
        setAction(res.data);
      };
      fetchAction();

    }, []);

    console.log(selectModule," ",selectAction);

   async function handleSubmit(e)
    {
      e.preventDefault();

      console.log(selectAction," ",selectModule);
       try{
        await axios.post(`http://localhost:8080/moduleactions/assignmodule/${selectModule}/${selectAction}`,{});

        // "{headers}");
        alert("Successfully assigned :)");    
        setSelectAction('');
        setSelectModule('');
      }catch(err)
      {
          alert("Failed");
      }
     
    }
    

    return ( 
        <>
        <AdminNavbar/>
        <SideNavBar/>
        <div className=" pt-5 m-5 pb-5 "><h3 ></h3>
       <form className="col-lg-9 offset-md-3 pt-3 px-5">
         <div class="form-group row">
            <label class="col-sm-2 col-form-label">Select Module</label>
            <div class="col-sm-5">
            {/* --------------------------------------------- */}
            <select className="form-control"  onChange={(event) => setSelectModule(event.target.value)}>
                {modules.map((module) => (
                <option  value={module.modulename}> {module.modulename} </option> 
                 ))}
            </select>
            

          {/* ------------------------------------------------ */}
            </div>
          </div> 
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Select Action</label>
            <div class="col-sm-5">
        {/*------- ------------------------------------------ */}
        <select className="form-control"  onChange={(event) => setSelectAction(event.target.value)}>
                {actions.map((action) => (
                <option  value={action.name}>
                {action.name}
                </option>
                 ))}
            </select>
        {/* ------------------------------------------------- */}
            </div>
          </div>         
       </form>
       <button onClick={handleSubmit} className="btn btn-primary pl-4 pr-4">Assign Roles</button>
       </div>
        </>
     );
}
 
export default AssignAction;