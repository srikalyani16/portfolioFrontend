import React from 'react'
import { HideLoading, ShowLoading } from '../../redux/rootSlice';
import axios from "axios";
import { message } from "antd";
import { useDispatch} from "react-redux";

const Login = () => {
    const [user,setUser]=React.useState({
        username:"",
        password:""
    })
    const dispatch=useDispatch();

    const login=async()=>{
        try{
            dispatch(ShowLoading())
            const response=await axios.post("/api/portfolio/admin-login",user);
            dispatch(HideLoading())
            if (response.data.success){
                localStorage.setItem('token',response.data);
                window.location.href="/admin";
            }
            else{
                message.error(response.data.message);
            }
        }
        catch(error){
            message.error(error.message);
            dispatch(HideLoading())
        }
    }
  return (
    <div className="flex justify-center items-center h-screen bg-primary">
        
        <div className="w-96 flex gap-5 p-5 shadow border border-gray-500 flex-col bg-white">
      <h1 className="text-2xl">Portfolio Admin-Login</h1>
      <input name="username" placeholder="UserName" type="text" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}/>
      <input name="password" placeholder="Password" type="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
      <button className="bg-primary text-white p-2" onClick={login}>Login</button>
    </div>
    </div>

    
  )
}

export default Login
