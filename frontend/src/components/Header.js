import { clearUser, getUserInfo } from "../localStorage";

const Header = {
    after_render: ()=>{
        
        const {name} = getUserInfo();
        if(name){
            document.getElementById("logout-btn")
            .addEventListener('click',()=>{
                clearUser();
                document.location.hash="/";
                window.location.reload();
            })
        }
        
    },
    render: ()=>{
        const {name, isAdmin} = getUserInfo();
        return `
            <div class="brand">
                <h1><a href="/#/" id="name_of_web">GAMING-HUB</a><h1>
            </div>
            <div id="auth">
                ${name?
                `<a class="ankor" href="/#/profile"> ${name}</a>
                <a class="ankor" href="/#/" id="logout-btn">Log-Out</a>
                <a class="ankor" href="/#/profile">ScoreCard</a>`:
                `<a class="ankor" href="/#/signin">Sign-In</a>
                 <a class="ankor" href="/#/register">Register</a>`
                }                
                
                ${isAdmin? `<a class="ankor" href="/#/dashboard">Dashboard</a>`:''}
            </div> 
        `;
    }
};

export default Header;