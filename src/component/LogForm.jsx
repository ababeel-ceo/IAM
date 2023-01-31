import { Link , useHistory} from "react-router-dom"; 
import { useState} from "react";
import React from "react";


const LogForm = () => {

    const history = useHistory();

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [errMsg,setErrorMsg]=useState('');


    const changeHandleUsername=(event)=>
    {
        setUsername(event.target.value);
    }
    const changeHandlePassword=(event)=>
    {
        setPassword(event.target.value);
    }
    
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        if(username !=="admin" || password !== "admin") 
        {
            setErrorMsg("Invalid Username or Password")
           
            return;
        }
        history.push("/userlist")
        localStorage.setItem('auth',true);
       
    }

    return ( 
        <section className="form my-4 mx-5">
                    
                    <div className="container pt-5">
                    <h3>Sign-in to your account</h3>
                    <div ><p className='text-danger'>{errMsg}</p></div>
                        <div className="row">
                            <div className="col-lg-7 px-5 pt-1 col-md-7 offset-md-4">
                               
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="col-lg-7">
                                            <input type="text" 
                                            value={username}
                                            name="username"
                                            onChange={changeHandleUsername}
                                            placeholder="Username" 
                                            className="form-control my-3 p-4" />
                                             {/* {errors.username && <div className="alert alert-danger">{errors.username}</div>} */}
                                        </div>
                                       
                                       
                                    </div>
                                    <div className="form-row">
                                        <div className="col-lg-7">
                                            <input type="password" placeholder="Password" className="form-control my-3 p-4" 
                                            name = "password"
                                            value={password}
                                            onChange={changeHandlePassword}/>
                                            {/* {errors.password && <div className="alert alert-danger">{errors.password}</div>} */}
                                        </div>
                                      
                                    </div>
                                    <div className="form-row">
                                        <div className="col-lg-7">
                                            <input type="submit" className="btn1 mt-3 mb-5" />
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                            
                        </div>
                        <p align="center">Don't have an account? <Link  to="/register">Register here</Link></p>
                    </div>
                </section>
     );
}
 
export default LogForm;
