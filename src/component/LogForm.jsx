import { Link , useHistory} from "react-router-dom"; 

import { useState} from "react";
import React, {useEffect} from "react";
import axios from "axios";




const LogForm = () => {
    // const navigate = useNavigate();

    const history = useHistory();
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [errMsg,setErrMsg]=useState('');


    const changeHandleUsername=(event)=>
    {
        setUsername(event.target.value);
    }
    const changeHandlePassword=(event)=>
    {
        setPassword(event.target.value);
    }
     
    async function handleSubmit ()
    {

        try{
         await axios.post("http://localhost:8080/user/authenticate",
            {
              email : username,
              password : password
              
            }).then(response => {
                const jwtToken = response.data.token;
                console.log("this jt  :",jwtToken);
                localStorage.setItem('jwtToken', jwtToken);
            });
           
            alert("Logging in");    
            setUsername(''); 
            history.push('/dashboard');
      
          }catch(err)
          {
              alert(err.response.status);
          }
       
        
    }

//  const handleSubmit=()=>
//  { 

//      var Obj = {
//          username:username,
//          password:password,
//      }
//      axios.post("http://localhost:8080/user/login" ,Obj).then(res=>{
//         let msg = res.data;
//         //  console.log(JSON.stringify(res));  
//         if(msg)
//         {
//             localStorage.setItem("auth",res);
//             history.push("/userlist")
//         }     
//          alert(msg);
      
//      }).catch(err=>{
//          alert(JSON.stringify(err));
         
//      })
//  }
    return ( <>
        <section className="form my-4 mx-5">
                    
                    <div className="container pt-5">
                    <h3>Sign-in to your account</h3>
                    <div ><p className='text-danger'>{errMsg}</p></div>
                        <div className="row">
                            <div className="col-lg-7 px-5 pt-1 col-md-7 offset-md-4">
                                
                                    <div className="form-row">
                                        <div className="col-lg-7">
                                            <input type="text" 
                                            value={username}
                                            name="username"
                                            onChange={changeHandleUsername}
                                            placeholder="Username" 
                                            className="form-control my-3 p-4" />
                                             { errMsg.username && <div className="alert alert-danger">{errMsg.username}</div> }
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
                                            <button className="btn1 mt-3 mb-5" onClick={()=>handleSubmit()}>Login</button>
                                        </div>
                                    </div>
                                     
                            </div>
                            
                        </div>
                        <p align="center">Don't have an account? <Link  to="/register">Register here</Link></p>
                    </div>
                </section>

                </>
     );
}
export default LogForm;