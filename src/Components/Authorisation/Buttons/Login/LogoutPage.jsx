// import React, { useState } from 'react'
// import { useNavigate,NavLink } from 'react-router-dom'
// import { useLogin } from '../../../../Utility/LoginProvider'


// const LogoutPage = () => {
//   // const [loginButton,setLoginButton]=useState(false)
//   const {state,dispatch}=useLogin()

//   const navigate=useNavigate()

//   const handleClick=()=>{
//     dispatch({type:"USER" , payload:false})
//     localStorage.clear()
//     navigate('/login')
//     window.alert("logout successfully")
//   }
//   // const handleLogout=()=>{
//   //   const API = "https://node-backend-blog-project-f5vv.onrender.com/user/register"
//   //   // const API = localhostLogout
//   //   axios.post(API)
//   //   .then(res=>{
//   //     // console.log("logout",res.data);
//   //     navigate('/')
//   //     setLoginBut(false)
//   //     localStorage.clear()
  
//   //     // window.location.reload();
//   //   })
//   //   .catch(err=>console.log(err))
  
//   // }
//   return (
//     <div className='profile-btn'>
//       <>{localStorage.getItem("email")}</> <br/>
//     <button ><NavLink to='/login' onClick={handleClick}>Logout</NavLink></button>

      
//     </div>
//   )
// }

// export default LogoutPage
