import { useState } from "react"

export const useLogin=()=>{
    const [isLogin,setIsLogin]= useState(false);

    const login=()=>{
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
          setToken(storedToken);
        }
        setIsLogin(true);
    }
    const logout=()=>{
        setIsLogin(false);
    }

    return{
        isLogin
    }
    
}