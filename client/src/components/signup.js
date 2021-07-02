import React  from 'react';


const Signup = () => {
    return(
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="register-form">
                            <h2 className="form-title">SignUp</h2>
                        
                            <form className="signup-form" id="signup-form">
                                <div className="form-group">
                                    <label htmlFor="name"><i class="zmdi zmdi-account material-icons-name"></i> </label>
                                
                                 <input type="text" name ="name" id="name" autoComplete="off" placeholder="your name" /><br></br>
                                 </div>

                                 <div className="form-group">
                                    <label htmlFor="email"><i class="zmdi zmdi-email"></i> </label>
                                
                                 <input type="text" name ="email" id="name" autoComplete="off" placeholder="your email" /><br></br>
                                 </div>

                                 <div className="form-group">
                                    <label htmlFor="passowrd"><i class="zmdi zmdi-lock"></i> </label>
                                
                                 <input type="text" name ="password" id="name" autoComplete="off" placeholder="your password" /><br></br>
                                 </div>

                                 <div className="form-group">
                                    <label htmlFor="cpassword"><i class="zmdi zmdi-lock"></i></label>
                                
                                 <input type="text" name ="cpassword" id="name" autoComplete="off" placeholder="confirm passowrd" /><br></br>
                                 </div>

                                 <div className="form-group">
                                    <label htmlFor="address"><i class="zmdi zmdi-power-input"></i> </label>
                                
                                 <input type="text" name ="address" id="name" autoComplete="off" placeholder="your address" /><br></br>
                                 </div>
                                 <div className="form-group from-button">
                                 <button type="button" class="btn btn-primary ">REGISTER</button>
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
                
                
                  
                       
                          
                            
                                    
                         
     