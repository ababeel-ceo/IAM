import NavBar from './component/navbar';
import React, {Component} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import HomePage from './component/homePage';
import UserList from './component/userList';
import LogForm from './component/LogForm';
import RegForm from './component/RegForm';


function App() {
  return (    
<Router>
    <div className="App">
    
     
       <div className="content">
       <NavBar/>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/login">
            <LogForm/>
          </Route>
         
          
          <Route exact path="/register">
              <RegForm/>
          </Route>
          <Route exact path="/userlist">
            <UserList/>
          </Route>
        </Switch>

       </div>
    </div>
    </Router>

      );
}

export default App;


// <Routes>
// <Route path="/" element={<Layout/>}>

// </Route>
// </Routes>



