import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const LoginPage = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const navigate=useNavigate();
  const handleChange = (e) => {
    let { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    let newUser={...formData}
    if(newUser.email.trim()==="" && newUser.username.trim()===""&& newUser.password.trim()===""){
      toast("Enter credentials !",{icon:"😒"});
      return
    }
    let allSignUpUsers=JSON.parse(localStorage.getItem("users"))||[];

    let  authUser= allSignUpUsers.find((ele)=>{
      return ele.email===newUser.email && ele.password===newUser.password
    })
    console.log(authUser);
    

    if(authUser){
      toast.success("Succesfully");

       navigate("/");
      sessionStorage.setItem("accessToken",Date.now())

      
    }
    else{
      toast.error("user does not exits")
    }
    setFormData({email:"",password:""})
  }
  
  
  return (
    <div>
        <Navbar/>
     <section className="flex items-center justify-center min-h-[85vh] bg-gray-50 px-4">
        <form onSubmit={handleSubmit}       className="w-full max-w-sm bg-white shadow-xl rounded-2xl px-8 py-10 border border-gray-200">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Login</h1>
          <input className="border border-gray-400 rounded p-3 w-2xs mb-3" type="email" name="email" id="email" required placeholder="Enter Email" value={formData.email} onChange={handleChange} />
          <input className="border border-gray-400 rounded p-3 w-2xs mb-3" type="password" name="password" id="password" required placeholder="Enter password" value={formData.password} onChange={handleChange} />
          <p className="text-center font-extralight mt-4">Don't have an account? <Link to="/signup" className="text-blue-700 underline">Signup</Link></p>
          <button         className="w-full py-3 mt-6 rounded-lg bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition-all">Login</button>
        </form>
      </section>
    </div>
  )
}


export default LoginPage;