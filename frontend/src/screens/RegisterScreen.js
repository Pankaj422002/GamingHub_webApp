import { register, sendingmail } from "../api";
import { setUserInfo } from "../localStorage";
import { fillotp, hideLoading, rerender, showLoading, showMessage } from "../utils";
import HomeScreen from "./HomeScreen";

const generateOTP = ()=>{
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}

const RegisterScreen = {
    after_render: ()=>{

        document.getElementById('register-form')
        .addEventListener('submit',async(e)=>{
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('psw').value;
            const repassword = document.getElementById('psw-repeat').value;

            //send the mail to the user
            if(password!=repassword){
                showMessage('password not match');
            }else{
                showLoading();
                const data_otp = await sendingmail({name,email});
                hideLoading();
                if(data_otp.error){
                    showMessage('mail not send try again');
                }else{

                    // const filled_otp = prompt('enter your otp...');
                    var starting = true;
                    func();
                    
                    function func(){
                        if(starting){
                             fillotp('');
                        }else{
                            fillotp('Incorrect OTP');
                        }
                       
                        starting = false;
                        
                        document.getElementById('message-overlay-submit-button').addEventListener('click',async ()=>{
                            var filled_otp = document.getElementById('filled_otp').value;
                            if(filled_otp!=data_otp){
                                func();
                                // console.log('hi');
                            }else{

                                showLoading();
                                const data = await register({name,email,password});
                                hideLoading();
                                console.log(data);
                                if(data.error){
                                    console.log(data.error);
                                    showMessage("User is Already exist");
                                }else{
                                    showMessage("successfully registered...");
                                    setUserInfo(data)
                                    document.location.hash='/';
                                }
                                
                            }
                        })
                    }

                      
                }
                
            }    
        });

    },
    render: ()=>{
        return `

        <div class="form-container">
            <form action="/register" id="register-form">
                <div>
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    
                    <div class="input-field">
                        <label for="name"><b>Name</b></label> 
                        <input type="text" placeholder="Enter Name" name="name" id="name" required><br>
                    </div>

                    <div class="input-field">
                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" id="email" required><br>
                    </div>

                    <div class="input-field">
                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" id="psw" required><br>
                    </div>
                    <div class="input-field">
                        <label for="psw-repeat"><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required><br>
                    </div>
                
                    <p>By creating an account you agree to our <a class="ankor">Terms & Privacy</a>.</p>
                    <button class="primary fw" type="submit">Proceed</button>
                </div>
            
                <div>
                    <p>Already have an account? <a class="ankor" href="/#/signin">Sign in</a>.</p>
                </div>
            </form>
        </div>

        `;
    }
};

export default RegisterScreen;