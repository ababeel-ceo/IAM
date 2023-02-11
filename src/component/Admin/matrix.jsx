import { useState } from 'react';
import AddAction from './AddActions';
const MatrixView = () => {

    const [roles, setRoles] = useState(["role-1","role-2","role-3","roles-4","roles-5","role-3","roles-4","roles-5"]);
    const [actions, setActions] = useState(["Action-1","Action-2","Action-3","Hello","Otis"]);
    const options = ["Option 1", "Option 2", "Option 3"];
    const [selectedModule, setSelectedModule] = useState("Option 1");
    
    const [selectedValues, setSelectedValues] = useState([]);

    const handleChange=(event) =>{

        setSelectedValues(event.target.value);
    }

    console.log(selectedValues);

    


    return ( 
        <>        
        <h1 className='p-5'>Access View in matrix </h1>

        <div className="col-sm-5 col-lg-7 offset-2 pb-5">
            {/* --------------------------------------------- */}
            <label> Select Module </label>
            <select className="form-control" value={selectedModule} onChange={(event) => setSelectedModule(event.target.value)}>
                {options.map((option) => (
                <option key={option} value={option}>
                {option}
                </option>
                 ))}
            </select>
          {/* ------------------------------------------------ */}
            </div>
        
        <table className="table table-striped">
            <thead>{
            roles.map(role =>
                                
                                <tr> 
                                    <th>{role}</th>
                                    {
                                        actions.map(action =>
                                            <td><input type="checkbox"
                                                onChange={handleChange}
                                                value={action}
                                            />{action}</td>)
                                    }
                                </tr>
                                )
            }
            </thead>
        </table>
        </>
     );
}
 
export default MatrixView;