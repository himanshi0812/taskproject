import React  from 'react';
import {useHistory} from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
    const history = useHistory();
    const[user,setUser] = useState({
        name : "",email:"",password:"",cpassword:"",address:""
    });

    let name,value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user,[name]:value});
    }

    const postData = async (e) => {
        e.preventDefault();
        const {name,email,password,cpassword,address} = user;
        const res = await fetch("/register" , {
            method : "POST",
            headers :{
                "content-type" : "application/json"
            },
            body:JSON.stringify({
                name,email,password,cpassword,address
            })
        });
         const data = await res.json();
         if(!data){
            window.alert("invalid register") 
            console.log("invalid register");
         }else{
            window.alert("success register") 
            console.log("success register");

            history.push("/login");
         }

    }
    return(
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="register-form">
                            <h2 className="form-title">SignUp</h2>
                        
                            <form method="POST" className="signup-form" id="signup-form">
                                <div className="form-group">
                                    <label htmlFor="name"><i class="zmdi zmdi-account material-icons-name"></i> </label>
                                
                                 <input type="text" name ="name" id="name" autoComplete="off" 
                                 value={user.name}
                                 onChange = {handleInputs}
                                 placeholder="your name" /><br></br>
                                 </div>

                                 <div className="form-group">
                                    <label htmlFor="email"><i class="zmdi zmdi-email"></i> </label>
                                
                                 <input type="text" name ="email" id="name" autoComplete="off" 
                                 value={user.email}
                                 onChange = {handleInputs}
                                 placeholder="your email" /><br></br>
                                 </div>

                                 <div className="form-group">
                                    <label htmlFor="passowrd"><i class="zmdi zmdi-lock"></i> </label>
                                
                                 <input type="text" name ="password" id="name" autoComplete="off" 
                                 value={user.password}
                                 onChange = {handleInputs}
                                 placeholder="your password" /><br></br>
                                 </div>

                                 <div className="form-group">
                                    <label htmlFor="cpassword"><i class="zmdi zmdi-lock"></i></label>
                                
                                 <input type="text" name ="cpassword" id="name" autoComplete="off" 
                                 value={user.cpassword}
                                 onChange = {handleInputs}
                                 placeholder="confirm passowrd" /><br></br>
                                 </div>

                                 <div className="form-group">
                                    <label htmlFor="address"><i class="zmdi zmdi-power-input"></i> </label>
                                
                                 <input type="text" name ="address" id="name" autoComplete="off" 
                                 value={user.address}
                                 onChange = {handleInputs}
                                  placeholder="your address" /><br></br>
                                 </div>
                                 <div className="form-group from-button">
                                 <input type="submit" name ="signup" id="signup" autoComplete="off" 
                                 value="register" onClick={postData}
                               
                                 />
                                 </div>
                                 
                            </form>
                            
                        </div>
                    </div>
                </div>
            </section>   
            </>
    )
}
export default Signup;
                
                
                  
                       
                          
                            
                                    
                         
     