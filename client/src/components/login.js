import React  from 'react';
import { useState } from 'react';
import { useHistory
 } from 'react-router';


const Login = () => {

    const history = useHistory();
    const [email,setEmail] = useState(' ');
    const [password,setPassword] = useState(' ');

    const loginUser =async (e) => {
        e.preventDefault();
        // const {email,password} = user;
        const res = await fetch("/signin" , {
            method : "POST",
            headers :{
                "content-type" : "application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        });
         const data = await res.json();
         if(res.status === 400 || !data){
            window.alert("invalid login") 
            console.log("invalid login");
         }else{
            window.alert("success login") 
            console.log("success login");

            history.push("/");
         }

    }
    
    return(
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="register-form">
                            <h2 className="form-title">SignIn</h2>
                        
                            <form method = "POST" className="signup-form" id="signup-form">
                                <div className="form-group">
                                    <label htmlFor="email"><i class="zmdi zmdi-email"></i> </label>
                                
                                 <input type="text" name ="email" id="name" autoComplete="off"  
                                 value={email}
                                 onChange= {(e)=>setEmail(e.target.value)}
                                 placeholder="your email "/><br></br>
                                 </div>

                                 <div className="form-group">
                                    <label htmlFor="passowrd"><i class="zmdi zmdi-lock"></i> </label>
                                
                                 <input type="text" name ="password" id="name" autoComplete="off" 
                                   value={password}
                                   onChange={(e)=>setPassword(e.target.value)}
                                   placeholder="your password" /><br></br>
                                 </div>

                                 <div className="form-group from-button">
                                 <input type="submit" name ="signin" id="signin" autoComplete="off" 
                                 value="login" onClick={loginUser}
                               
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
export default Login;
                
                
                  
                       
                          
                            
                                    
                         
     