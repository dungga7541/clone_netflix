import axios from "axios";
import { 
    loginFailure, loginStart,loginSuccess,logoutSuccess,
} from "./authActions";
import { toast } from 'react-toastify';
const axiosInstance = axios.create
({
    baseURL:process.env.REACT_APP_API_URL,
});
export const login =async (user,dispatch)=>{
    dispatch(loginStart());
    try{
        const res =await axiosInstance.post("/auth/login",user);
        dispatch(loginSuccess(res.data));
        toast.success("Đăng nhập thành công")
    }catch(err){
        dispatch(loginFailure());
        toast.error("Sai tài khoản hoặc mật khẩu!!")

    }
}

export const logout = async (user,dispatch)=>{
    dispatch(logoutSuccess());
}
