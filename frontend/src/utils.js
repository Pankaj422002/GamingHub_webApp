
export const parseRequestUrl = ()=>{
    const url = document.location.hash.toLowerCase();
    const request = url.split('/');
    return {
        resource: request[1],
        id: request[2],
        verb: request[3],
    };
};

export const rerender = async (component) => {
    document.getElementById("main-container").innerHTML = await component.render();
    await component.after_render();
};  

export const showLoading = ()=>{
    document.getElementById('loading-overlay').classList.add('active');
};

export const hideLoading = ()=>{
    document.getElementById('loading-overlay').classList.remove('active');
};


export const showMessage = (message,callback)=>{
    document.getElementById('message-overlay').innerHTML=`
    <div>
        <div id = "message-overlay-content">${message}</div>
        <button id="message-overlay-close-button">OK</button>
    </div>
    `;
    document.getElementById('message-overlay').classList.add('active');
    document.getElementById('message-overlay-close-button')
    .addEventListener('click',()=>{
        document.getElementById('message-overlay').classList.remove('active');    
        if(callback){
            callback();
        }
    });
};

export const fillotp = (x,callback)=>{
    document.getElementById('message-overlay').innerHTML=`
    <div>
        <div id = "message-overlay-content">${x==''? 'Enter The OTP' : 'incorrect OTP'}</div>
        <input type="number" placeholder="Enter OTP" name="filled_otp" id="filled_otp" required>
        <div id="fillotp_controllers">
            <button class="primary" id="message-overlay-submit-button">Submit</button>
            <button class="primary" id="message-overlay-close-button" >Close</button>        
        </div>
   </div>
    `;
    document.getElementById('message-overlay').classList.add('active');
    document.getElementById('message-overlay-submit-button')
    .addEventListener('click',()=>{
        document.getElementById('message-overlay').classList.remove('active');    
        if(callback){
            callback();
        }
    });
    document.getElementById('message-overlay-close-button')
    .addEventListener('click',()=>{
        document.getElementById('message-overlay').classList.remove('active');    
        if(callback){
            callback();
        }
    });
};
