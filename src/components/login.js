import React from "react";
import PropTypes from "prop-types";

const Login=(props)=>(  
<nav className="login">
<h2>Inventory login</h2>
<p>Sign in to manage your store inventory</p>
<button className="github" onClick={()=>props.authentication("Github")}>Log In With Github</button>
<button className="facebook" onClick={()=>props.authentication("Facebook")}>Log In With Facebook</button>

</nav>
);
Login.propTypes = {
    authentication: PropTypes.func.isRequired
  };
  
export default Login;