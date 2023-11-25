import { createContext,useContext,useState } from "react";
import {RenderRoutes,RenderMenu} from '../components/structure/RenderNavigation'
import axios from 'axios';


const AuthContext = createContext();
export const AuthData=()=>useContext(AuthContext);

export const AuthWrapper=()=>{
    const [user,setUser] = useState({name:"",isAuthenticated:false});
    const login = (username,password)=>{
        //API call
        axios.post("http://localhost:4000/patientLoginRoute", {
            username,
            password
          });
        return new Promise((resolve,reject)=>{
            if(password){
                setUser({name:username,isAuthenticated:true})
                resolve("success")
            }else{
                reject("Incorrect passowrd")
            }
        })
    }

    const logout = ()=>{
        setUser({...user,isAuthenticated:false})
    }

    return(
        <AuthContext.Provider value={{user,login,logout}}>
            <>
                <RenderMenu />
                <RenderRoutes />

            
            </>

        </AuthContext.Provider>
    )
}
