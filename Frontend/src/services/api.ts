import axios from "axios"

const API_URL = "http://26.81.82.245:5089";

const RegistrationRoute = "/api/User/Registration";

const LoginRoute = "/api/User/Login";

const getUserRoute = "/api/User/GetAuthenticatedUser";



export const registrationPost = async (userName: string, email: string, phone: string, password: string) => {
    try {
        const data = {
            id:0,
            userName:userName,
            email:email,
            phoneNumber:phone,
            password:password
        }
        
        const response = await axios.post(API_URL+RegistrationRoute, data);

        return response.status;
    }
    catch (e) {
        console.log("Error" + e);
    }
}

export const loginPost = async (phoneOrEmail: string, password: string) => {
    try {
        const data = {
            id:0,
            phoneOrEmail: phoneOrEmail,
            password: password
        }
        
        const response = await axios.post(API_URL+LoginRoute, data);
        return response.status;
    }
    catch (e) {
        console.log("Error" + e);
    }
}

export const userGet = async () => {
    try { 
        const response = await axios.get(API_URL+getUserRoute);
        return response.data;
    }
    catch (e) {
        console.log("Error" + e);
    }
}