import axios from "axios";

// const URL = "http://localhost:5000";
const URL = "http://43.205.139.217";


  

export const registerUser = async (value) => {  
    try{

        const { data } = await axios.post(URL+"/register" , value );

        return data;

    }catch(err){
        console.log(err + "Registeration error");
    } 
} 

export const loginUser = async (value) => {
    try{
        const { data } = await axios.post(URL+"/login" , value);

        console.log(JSON.stringify(data));

        return data;
    }catch(err){
        console.log(err + "Registeration error");
    }
}

export const isUserExists = async () => {
    try{

        const token = localStorage.getItem('x-token');

        if(token){
            const { data } = await axios.post(URL,{token:token});

            return data.status;
        }

        return false;

    }catch(error){
        console.log(error + "UserNot exits");
    }
}


