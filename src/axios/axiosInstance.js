import axios from "axios";

 export const api =axios.create({
    // baseURL:"http://localhost:4000",
    baseURL:import.meta.env.VITE_BASE_URL,
    //withCredentials:true

});