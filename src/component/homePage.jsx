import NavBar from './navbar';
import {Link,useHistory} from "react-router-dom";


const HomePage = () => {
    const history = useHistory();

    return ( 
        <>

        <div class="header">
      <h1>Identity and Access Management</h1>
      <button className='btn btn-secondary' onClick={(e)=>
    {
        e.preventDefault();
        history.push("/login");

    }}>Login/Sign-up</button>
      
    </div>
    <div class="hero-section">
      <h1>Securely manage and control access to your resources</h1>
    </div>
    <div class="features">
      <div class="feature">
        <h3>Security</h3>
        <p>Security refers to the measures taken to protect sensitive information, 
            systems, and assets from unauthorized access, misuse, damage, or disruption, 
            with the goal of maintaining confidentiality.</p>
      </div>
      <div class="feature">
        <h3>Authentication</h3>
        <p>Authentication is the process of verifying the identity of a user, device,
             or system by confirming the validity of credentials such as a username and 
             password or other unique identifiers.</p>
      </div>
      <div class="feature">
        <h3>Authorization</h3>
        <p>Authorization is the process of granting access or 
            permission to a user to perform specific actions within
             a system or application based on their assigned roles 
             and privileges.</p>
      </div>
    </div>
    <div class="cta">
      <h2>Get started with secure identity management</h2>
      <Link to="/register">Sign up now</Link>
    </div>
        </>
    
        
     );
}
 
export default HomePage;