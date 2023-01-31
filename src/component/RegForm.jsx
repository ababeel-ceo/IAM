import React, { Component } from 'react';

import { useState } from 'react';
const RegForm = () => {

    const [fn,setfn]=useState('');
    const [ln,setln]=useState('');
    const [email,setemail]=useState('');
    const [mobile,setmobile]=useState();
    // const [status,setstatus]=useState();
    const [us,setus]=useState('');
    const [pass,setpass]=useState('');

    const changeus=(event)=>
    {
        setus(event.target.value);
    }

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
    // const changestatus=(event)=>
    // {
    //     setstatus(event.target.value);
    // }
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
      let item = {us,pass,fn,ln,email,mobile};
      console.log(item);

      let result = await fetch( "enter url here",{
        method:'POST',
        body:JSON.stringify(item),
        header:{
          "Content-Type" : 'application/json',
          "Accept" : 'application/json'
        }
      } )    
      result = await result.json()
      console.log("Result",result)
      

    }

    return ( 
   
                         
<div className=" col-lg-7 offset-md-2 pt-5 px-5">
    <h3>Register</h3><br />
    
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
      <input type="number" class="form-control" id="validationCustom03" 
      name="mobileno"
      value={mobile}
      onChange={changmobile}
      />
      
    </div>
    {/* <div class="col-md-6 mb-3">
      <label for="validationCustom04">Status</label>
      <select class="custom-select" id="validationCustom04" 
      selected 
      name="status"
      value={status}
      onChange={changestatus}
      >
        <option>Active</option>
        <option>Inactive</option>
      </select>
      
    </div> */}
    <div class="col-md-6 mb-3">
      <label for="validationCustom05">Username</label>
      <input type="text" class="form-control" id="validationCustom05" 
      name="username"
      value={us}
      onChange={changeus}
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
   
    );
}
 
export default RegForm;