import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import HomePage from './component/homePage';
import UserList from './component/userList';
import LogForm from './component/LogForm';
import RegForm from './component/RegForm';
import AddModule from './component/Admin/AddModules';
import AddAction from './component/Admin/AddActions';


import DashBoard from './component/Admin/Dashboard';
import AddRole from './component/Admin/AddRole';
import User from './component/Admin/ListofUsers';
import AssignRoles from './component/Admin/AssignRoles';
import MatrixView from './component/Admin/matrix';
import AssignAction from './component/Admin/AssignActions';




function App() {


  return (    
<Router>
    <div className="App" >
       <div className="content">
        <Switch>
          <Route exact path="/"  component={HomePage} />
          <Route path="/login"  component={LogForm} />
          <Route path="/register" component={RegForm} />
          <Route path="/userlist" component={UserList} />
          {/* ----------------------------------------- */}
          <Route path="/addmodule" component={AddModule} />
          <Route path="/addaction" component={AddAction} />
          <Route path="/addrole" component={AddRole}/>
          <Route path="/assignroles" component={AssignRoles}/>
          <Route path="/dashboard" component={DashBoard} />
          {/* ----------------------------------------- */}
          <Route path="/user" component={User} />
          <Route path="/matrix" component={MatrixView}/>
          <Route path="/assignactions" component={AssignAction}/>
          
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



