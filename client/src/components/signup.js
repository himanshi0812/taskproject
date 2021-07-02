import React  from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
// import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
const Signup = () => {
    const [user,setUser] = useState({
        name:"",email:"",password:"",cpassword:"",address:""
    });
    let name ,value;
    const handleInputs = (e) => {
        console.log(e);
        name =e.target.name;
        value = e.target.value;

        setUser({...user,[name]:value});
    }
    return(
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">SignUp</h2>
                            <form className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name"><i class="zmdi zmdi-account material-icons-name"></i> </label>
                                    <input type="text" name ="name" id="name" autoComplete="off" placeholder="your name" /><br></br>
                                    
                                    <label htmlFor="username"><i class="zmdi zmdi-account material-icons-name"></i> </label>
                                    <input type="text" name ="username" id="username" autoComplete="off" 
                                    value={user.name} onChange={handleInputs} placeholder="username" /><br></br>

                                    <label htmlFor="email"><i class="zmdi zmdi-email"></i></label>
                                    <input type="text" name ="email" id="email" autoComplete="off" 
                                     value={user.email} onChange={handleInputs} 
                                     placeholder="your email" /><br></br>
                                    
                                    <label htmlFor="password"><i class="zmdi zmdi-lock"></i> </label>
                                    <input type="text" name ="password" id="password" autoComplete="off"  
                                    value={user.password} onChange={handleInputs}
                                     placeholder="your password" /><br></br>

                                    <label htmlFor="cpassword"><i class="zmdi zmdi-lock"></i> </label>
                                    <input type="text" name ="cpassword" id="cpassword" autoComplete="off"
                                     value={user.cpassword} onChange={handleInputs}
                                      placeholder="confirm password" /><br></br>
                                    
                                    <label htmlFor="address"><i class="zmdi zmdi-account material-icons-name"></i> </label>
                                    <input type="text" name ="address" id="address" autoComplete="off" 
                                     value={user.address} onChange={handleInputs}
                                      placeholder="your address" /><br></br>

                                    <div class="col-12">
                                    <button type="submit" class="btn btn-primary">REGISTER</button>
                                    </div>
                                </div>
                            </form>
                               
                                </div>
                                <div className="signup-image">
                                    <figure>
                                        <img src="signupimage.jpg" alt="signup pic" width="200px" height="150px"></img>
                                    </figure>
                                    <NavLink to="/login" className="signup-image-link">I am already to register</NavLink>
                                </div>
                        </div>
                    
                </div>
            </section>
        </>
    )
}
export default Signup;