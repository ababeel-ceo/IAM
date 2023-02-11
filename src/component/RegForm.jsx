
import axios from 'axios';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const RegForm = () => {

    
    const history=useHistory();

    const [fn,setfn]=useState('');
    const [ln,setln]=useState('');
    const [email,setemail]=useState('');
    const [mobile,setmobile]=useState('');
    const [pass,setpass]=useState('');
    const [errMsg, setErrMsg] = useState('');

    

    const changepass=(event)=>
    {
        setpass(event.target.value);
    }

    const changefn=(event)=>
    {
        setfn(event.target.value);
    }
    const changeln=(event)=>
    {
        setln(event.target.value);
    }
  
    const changeHandleemail=(event)=>
    {
        setemail(event.target.value);
    }
    const changmobile=(event)=>
    {
        setmobile(event.target.value);
       
    }


    async function register(e)
    {
        e.preventDefault();
        try{
          await axios.post("http://localhost:8080/user/register",
          {
            
            password : pass,
            email : email,
            firstname : fn,
            lastname : ln,
            mobile : mobile
          });
          
          setemail("");
          setfn("");
          setln("");
          setmobile("");
          setpass("");
          history.push("/login");
          

        }catch(err)
        {
            alert("Failed");
        }
    }

    return ( 
   <>
                    
<div className=" col-lg-7 offset-md-2 pt-5 px-5">
    <h3>Register</h3><br/>
    {
    
        errMsg
      
    }
    
<form class="needs-validation"  >
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom01">First name</label>
      <input type="text" class="form-control" id="validationCustom01"  
      name="firstname"
      value={fn}
      onChange={changefn}
      />
      
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationCustom02">Last name</label>
      <input type="text" class="form-control" id="validationCustom02"  
      name='lastname'
      value={ln}
      onChange={changeln}
      />
      
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom03">Mobile No</label>
      <input type="text" class="form-control" id="validationCustom03" 
      name="mobileno"
      value={mobile}
      onChange={changmobile}
      />
      
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationCustom05">Password</label>
      <input type="password" class="form-control" id="validationCustom05" 
      name="password"
      value={pass}
      onChange={changepass}
      />
    </div>
    <div class="col-md-6 mb-3">
      <label for="email">Email</label>
      <input type="email" class="form-control" id="email" 
      name="email"
      value={email}
      onChange={changeHandleemail}
      />
    </div>
  </div>
  
  <button onClick={register} className="btn1" type="submit">Register</button>
</form>
</div>
</>
    );
}
 
export default RegForm;