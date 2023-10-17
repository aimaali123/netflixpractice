

import React, { useEffect, useState } from 'react'
import {Link, useLocation, useNavigate } from 'react-router-dom';
// import { database} from './firebaseConfig.js';
import {initializeApp} from "firebase/app";
import { firebaseConfig } from './firebaseConfig.js';
import Validation from './Validation.jsx';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";

const Login = () => {
  
  initializeApp(firebaseConfig);
  const auth= getAuth();
  const navigate1= useNavigate();
  const location=useLocation();
  
  const [formvalues,setFormValues]=useState({
    email:'',
    password:'',
  });
const[errors,setErrors]=useState({});
  const[isUserExist,setUserExist]=useState(false);
  const[isEmailValid,setEmailValid]=useState(false);
  const page=location.pathname==="/login"? true:false ;
  
  useEffect(()=>{
setEmailValid(false);
setUserExist(false);
},[location])

const inputevent=(event)=>{
const{name,value}=event.target;
setFormValues((prevalue)=>{
  return{
    ...prevalue,
    [name]:value,
  }
})

}


const cnclickHandling =(e)=>{
  e.preventDefault();
  setErrors(Validation(formvalues));
  if(page===true){
  signInWithEmailAndPassword(auth,formvalues.email,formvalues.password)
  .then(auth=>{
    if(auth){
      navigate1("/dashboard");
    }
  })
  .catch((error)=>{ 
    console.log(error.message);
    setUserExist(true)});

  }
 
 else {
  createUserWithEmailAndPassword(auth,formvalues.email,formvalues.password)
  .then(auth => {
    if(auth){
      navigate1("/dashboard");
    }
  })
  .catch(error => { setEmailValid(true)});
  }
  setFormValues({
    email:'',
      password:'',
  })
};
  return (
    <>
    <div className='LogIn'>
    <div className='holder'>
    <h1 className='text-white'>{page?"Sign In":"Register"}</h1>
    <br/>

    <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" value={formvalues.email} name='email' onChange={inputevent} placeholder="Email or Phone number"/>

{errors.email && <p className='error-styling'>{errors.email}</p>}
  <label htmlFor="floatingInput">Email or Phone number
</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" value={formvalues.password} name='password' onChange={inputevent}  placeholder="Password"/>
  {errors.password && <p className='error-styling'>{errors.password}</p>}
  <label for="floatingPassword">Password</label>
</div>
<br/>
 <button className="btn btn-danger w-100" onClick={cnclickHandling} type="button">{page?"Sign In":"Register"}</button>
 <br/>
 {page && <div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label className="form-check-label"  htmlFor="flexCheckChecked">
Remember me 
  </label>
</div>}
  <br/>
   {/* {isUserExist && <p className='text-white'>User does not exist. Go to Sign up now</p>} */}
  {isEmailValid && <p className='text-white'>Already exist. Go to Sign In</p>}
  <br/>
  <div className='sign-up-now'>
  {page? "New to Netflix?" : "Existing User"} &nbsp; <Link to= {page? '/register': '/login'}> {page?"Sign up now":"Sign In"}</Link>
   </div>
</div>
<div className='background-im'></div>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg'alt='back-im'/>
 </div> 
    </>
  )
}

export default Login;
