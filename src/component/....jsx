import React, { Component } from 'react';
class RegisterForm extends Component {

  state={
    user:{
      firstname: "",
      lastname: "",
      mobileno:"",
      username: "",
      password: "",
      status:""

    },
    errors:{}
  }
  changeHandle  = ({currentTarget: input})  =>{
    const user = {...this.state.user};
    user[input.name] = input.value;
    this.setState({user}); 
}

  handleSubmit = (e)=>
  {
    e.preventDefault();
    const errors = this.validate();
        this.setState({errors : errors || {}});
    console.log(this.state.user);
  }
  validate =() =>{
    const errors={};

    if(this.state.user.firstname.trim() === '')
       {errors.username= "Firstname is required";}
    if(this.state.user.lastname.trim() === '')
        {errors.password= "Lastname is required";}
    return Object.keys(errors).length === 0? null : errors;
}
    render() { 
        return (
            
<div className=" col-lg-7 offset-md-2 pt-5 px-5">
    <h3>Register</h3><br />
    
<form class="needs-validation"  onSubmit={this.handleSubmit}>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom01">First name</label>
      <input type="text" class="form-control" id="validationCustom01"  
      name="firstname"
      value={this.state.user.firstname}
      onChange={this.changeHandle}
      />
      
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationCustom02">Last name</label>
      <input type="text" class="form-control" id="validationCustom02"  
      name='lastname'
      value={this.state.user.lastname}
      onChange={this.changeHandle}
      />
      
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom03">Mobile No</label>
      <input type="number" class="form-control" id="validationCustom03" 
      name="mobileno"
      value={this.state.user.mobileno}
      onChange={this.changeHandle}
      />
      
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationCustom04">Status</label>
      <select class="custom-select" id="validationCustom04" 
      selected 
      name="status"
      value={this.state.user.status}
      onChange={this.changeHandle}>
        <option>Active</option>
        <option>Inactive</option>
      </select>
      
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationCustom05">Username</label>
      <input type="text" class="form-control" id="validationCustom05" 
      name="username"
      value={this.state.user.username}
      onChange={this.changeHandle}
      />
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationCustom05">Password</label>
      <input type="password" class="form-control" id="validationCustom05" 
      name="password"
      value={this.state.user.password}
      onChange={this.changeHandle}
      />
    </div>
  </div>
  
  <button class="btn1" type="submit">Register</button>
</form>
</div>

        );
    }
}
 
export default RegisterForm;