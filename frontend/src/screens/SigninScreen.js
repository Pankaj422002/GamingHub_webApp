import { signin } from "../api";
import { setUserInfo } from "../localStorage";
import { hideLoading, showLoading, showMessage } from "../utils";

const SigninScreen = {
    after_render: ()=>{

        document.getElementById('signin-form')
        .addEventListener('submit',async(e)=>{
            e.preventDefault();
            showLoading();
            const data = await signin({
                email: document.getElementById('email').value,
                password: document.getElementById('psw').value,
            });
            hideLoading();
            if(data.error){
                showMessage(data.error);
            }else{
                showMessage('you are now signed in');
                setUserInfo(data);
                document.location.hash='/';
            }
        });

    },
    render: ()=>{
        return `

        <div class="form-container">
            <form action="/signin" id="signin-form">
                <div>
                    <h1>Signin</h1>
                    <p>Please Enter Your Details to Signin</p>
                    

                    <div class="input-field">
                        <label for="email"><b>Email</b></label> <br>
                        <input type="text" placeholder="Enter Email" name="email" id="email" required><br>
                    </div>

                    <div class="input-field">
                        <label for="psw"><b>Password</b></label><br>
                        <input type="password" placeholder="Enter Password" name="psw" id="psw" required><br>
                    </div>
                    <button class="primary fw" type="submit">Submit</button>
                </div>
            
                <div>
                    <p>Donot have account? <a class="ankor" href="/#/register">Register</a>.</p>
                </div>
            </form>
        </div>

        `;
    }
};

export default SigninScreen;