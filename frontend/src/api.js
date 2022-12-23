import { apiUrl } from "./config";
import axios from 'axios';
import { getUserInfo } from "./localStorage";
import { showMessage } from "./utils";

export const sendingmail = async ({name,email})=>{

    try{
        const response = await axios({
            url: `${apiUrl}/api/users/sendmail`,
            method:'POST',
            header:{
                'Content-Type':'application/json',
            },
            data:{
                name,
                email
            },
        });
        // console.log(response);
        if(response.status >=200 && response.status <=300){
            return response.data.msg;            
        }else{
            throw new Error(response.data.error);
        }

    }catch(err) {
        return {error: err};//err.response.data.message || err.message
    }
    

}

export const register = async ({name,email,password})=>{
    try{

        const response = await axios({
            url: `${apiUrl}/api/users/register`,
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
            data:{
                name,
                email,
                password,
            },
        });
        // console.log(response);
        if(response.status >=200 && response.status <=300){
            return response.data;            
        }else{
            throw new Error(response.data.message);
        }

    }catch(err){
        console.log(err);
        return {error: err.response.data.message || err.message};
    }
}

export const signin = async ({email,password})=>{
    try{

        const response = await axios({
            url: `${apiUrl}/api/users/signin`,
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
            data:{
                email,
                password,
            },
        });
        // console.log(response);
        if(response.status >=200 && response.status <=300){
            return response.data;            
        }else{
            throw new Error(response.data.message);
        }

    }catch(err){
        console.log(err);
        return {error: err.response.data.message || err.message};
    }
}

export const updateprofile = async ({name,email,password,snakeScore})=>{
    try{

        const {_id} = getUserInfo();
        const response = await axios({
            url: `${apiUrl}/api/users/${_id}`,
            method: 'PUT',
            header: {
                'Content-Type': 'application/json',
            },
            data:{
                name,
                email,
                password,
                snakeScore
            },
        });
        // console.log(response);
        if(response.status >=200 && response.status <=300){
            return response.data;            
        }else{
            throw new Error(response.data.message);
        }

    }catch(err){
        console.log(err);
        return {error: err.response.data.message || err.message};
    }
}