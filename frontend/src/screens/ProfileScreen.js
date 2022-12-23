import { sendingmail, updateprofile } from "../api";
import { getUserInfo, setUserInfo } from "../localStorage";
import { fillotp, hideLoading, showLoading, showMessage } from "../utils";

const ProfileScreen = {
    after_render: ()=>{

        document.getElementById('update-form')
        .addEventListener('submit',async(e)=>{
            e.preventDefault();

            const name = document.getElementById('name').value;
            const password = document.getElementById('psw').value;
            const email = document.getElementById('email').value;
            //send the mail to the user
            
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
                            const data = await updateprofile({name,email,password});
                            hideLoading();
                            console.log(data);
                            if(data.error){
                                console.log(data.error);
                                showMessage("Error updating");
                            }else{
                                showMessage("successfully updated...");
                                setUserInfo(data)
                                window.location.reload();
                            }
                            
                        }
                    })
                }
                    
            }
             
        });
    },
    render: ()=>{
        const {name,email,snakeScore} = getUserInfo();
        return `
        <div id="edit-profile-div">
            <div id="edit-profile-container">
                <form action="/profile" id="update-form">
                    <div>
                        <h1>Update Profile</h1>
                        
                        <div class="input-field">
                            <label for="name"><b>Name</b></label> 
                            <input type="text" value="${name}" name="name" id="name" required><br>
                        </div>

                        <div class="input-field">
                            <label for="email"><b>Email</b></label> 
                            <input type="text" value="${email}" name="email" id="email" disabled="disabled" required><br>
                        </div>

                        <div class="input-field">
                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" id="psw" required><br>
                        </div>
                    
                        <button class="primary fw" type="submit">Proceed To Update</button>
                    </div>
                </form>
            </div>
            <div id="scorecard-container">
                <ul class="score-items">
                    <li>
                        <div id="img_best_2"><a href="/#/snakegame"><img src="../../images/best-2.png" alt="score"></a></div>
                    </li>
                    <li>
                        <div class="score-title color1">
                            <h2>Snake-Game Score</h2>
                            <h3>Highest Score is: ${snakeScore}</h3> 
                        </div>
                    </li>
                </ul>
            </div>
            <div id="scorecard-container">
                <ul class="score-items">
                    <li>
                        <div id="img_best_3"><a href="/#/tictactoe"><img src="../../images/tic-tac-toe-ui.png" alt="score"></a></div>
                    </li>
                    <li>
                        <div class="score-title color1">
                            <h2>Tic-Tac-Toe</h2>
                        </div>
                    </li>
                </ul>
            </div>    
        </div>
        
        `;
    }
};

export default ProfileScreen;