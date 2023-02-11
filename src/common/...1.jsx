import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class LoginForm extends Component {

    state = {
        account: {username:'', password:''},
        errors: {},
        success: false,
        err:""
    };


    validate =() =>{
        const errors={};

        if(this.state.account.username.trim() === '')
           {errors.username= "Username is required";}
        if(this.state.account.password.trim() === '')
            {errors.password= "Password is required";}
        return Object.keys(errors).length === 0? null : errors;
    }

  
    handleSubmit = async(e) =>{
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors : errors || {}});
        if(errors) return;
        if(this.state.account.username!="admin" || this.state.account.password != "admin") 
        {
           this.state.err='Invalid Username or password'
            return ;
        } 
       
        
        console.log(this.username);
        console.log(this.password);
        console.log(this.state.account.username);
        console.log(this.state.account.password);
        this.state.success=true;
        this.state.account.username="";
        
       
        // Call the Server //
        
    }
    
    changeHandle  = ({currentTarget: input})  =>{
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account}); 
    }

    render() { 
        const {account,errors,success,err} = this.state;
        return (
            <>
            {success?(
                <section>
                    <h1>Your are logged in</h1><br />
                    <p>
                       <Link to="/userlist" className='btn btn-primary'>Show Users</Link>
                    </p>
                </section>
            ):(
                
                <section className="form my-4 mx-5">
                    
                    <div className="container pt-5">
                    <h3>Sign-in to your account</h3>
                    <div ><p className='text-danger'>{err}</p></div>
                        <div className="row">
                            <div className="col-lg-7 px-5 pt-1 col-md-7 offset-md-4">
                               
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-row">
                                        <div className="col-lg-7">
                                            <input type="text" 
                                            value={account.username}
                                            name="username"
                                            onChange={this.changeHandle}
                                            placeholder="Username" 
                                            className="form-control my-3 p-4" />
                                             {errors.username && <div className="alert alert-danger">{errors.username}</div>}
                                        </div>
                                       
                                       
                                    </div>
                                    <div className="form-row">
                                        <div className="col-lg-7">
                                            <input type="password" placeholder="Password" className="form-control my-3 p-4" 
                                            name = "password"
                                            value={account.password}
                                            onChange={this.changeHandle}/>
                                            {errors.password && <div className="alert alert-danger">{errors.password}</div>}
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
                
              
            )}
        </>
        
            );
    }
}
 
export default LoginForm;