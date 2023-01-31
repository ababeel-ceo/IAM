import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const UserList = () => {

    
    const [state,setState] = useState(
        [
            { firstname: "Daniel", lastname: "Pragash",
            id :1, status: "Active"
            },
            { firstname: "Sam", lastname: "Manickam",
            id :2, status: "Active"
            },
            { firstname: "Rajesh", lastname: "Kumar",
            id :3, status:"Inactive"
            },
            { firstname: "Abdulla", lastname: "",
            id :4, status:"Inactive"
            }

    ]
    );
    return (  
            <div className="container pt-5">
                <h2 className="text-center">
                    User's list
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>status</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            state.map(user =>
                                
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.status}</td>
                                </tr>
                                )
                        }
                    </tbody>
                    </table>
            </div>

    );
}
 
export default UserList;




{/* <h1>Users</h1><br />
        <div className='container col-7 offset-md-4'>
        
     {state.map((user)=>(

       
<div className="row"  key={user.id}>
    <div className='p-1'>
        <p><b>Name :</b></p>
    </div>
    <div className='p-1'>
        <p> {user.firstname}{user.lastname}</p>
    </div>
    <div className='p-1'>
        <p><b>UserID :</b> {user.id}</p>
    </div>
    <div className='p-1'>
    <p><b>Status :</b> {user.status}</p>
    </div>
       
</div> 


))}
</div> */}