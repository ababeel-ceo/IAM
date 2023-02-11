import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:8080/user/getall');
      if(result.data.status === 1)
      {
        result.data.status = true;
      }else{
        result.data.status = false;
      }
      setData(result.data);
    };
    fetchData();
  }, []);

    return ( 
  
        <>
            {/* <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div> */}

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
                            <th>Status</th>
                            <th>Mobile Number</th>
                            <th>Creation  date</th>
                            <th>Email</th>
                            

                        </tr>
                    </thead>

                    <tbody>
                        {
                            data.map(user =>
                                
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.status}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.userCreated}</td>
                                    <td>{user.email}</td>
                                </tr>
                                )
                        }
                    </tbody>
                    </table>
            </div>
        </>
     );
}
 
export default User;




