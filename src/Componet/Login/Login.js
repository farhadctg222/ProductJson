import React, { useContext, useState } from 'react';

import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, updateCurrentUser,} from "firebase/auth";
import { CreatContex } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';






const firebaseApp = initializeApp({
  apiKey: "AIzaSyCmG1_ml1PttHj3bZDtQt7aCo-QsWUCd7Q",
  authDomain: "newproject-953d2.firebaseapp.com",
  projectId: "newproject-953d2",
  storageBucket: "newproject-953d2.appspot.com",
  messagingSenderId: "697007000810",
  appId: "1:697007000810:web:19e9137c33f972b3fb9b93",
  measurementId: "G-8H3PF63VQ5"
})

const auth = getAuth(firebaseApp);















      const Login = () => {



   const  [logInUser,setLogInuser]= useContext(CreatContex)
   
  const navigate = useNavigate()
  const location = useLocation()
  const {from}= location.state || {from:{pathname:'/shipment'}}

        const [newusers,setNewusers]= useState(false)
        const [user,setuser] = useState({
          Name: '',
          Password:'',
          Email: '',
          error: '',
          success: false,
          logIn: false
})
      
          const  handleChange = (e)=>{
          let isvalid= true;
          if(e.target.name==="Email"){
            isvalid = /^\S+@\S+\.\S+$/.test(e.target.value)
        
          }
          if(e.target.name ==="Pasword"){
            const ss = e.target.value.length >6
            const password = /^\S+@\S+\.\S+$/.test(e.target.value)
           
            isvalid= ss && password
          
            
          }
         
        
          if(isvalid){
            const newser = {...user}
            newser[e.target.name]= e.target.value
            
            setuser(newser)
            
          }
      }
            
          
       
      
     
     
    
          
          const onsubmit = (e)=>{
           
          { 
           if (user.Email && user.Password) {
             
              createUserWithEmailAndPassword(auth,user.Email, user.Password)
              .then((userCredential) => {
                
               const es = userCredential
               es.displayName = user.Name
               setuser(es)
               
                // Signed in 
                const successfull = {...user}
                user.success = true
                
                successfull.success = "your are successfully create"
                setuser(successfull)
              
              
                // ...
              })
              .catch((error) => {
                const newuser = {...user}
                user.success = false
                const sss = 'your are already use email'
                newuser.error = sss
              
                // ..
              })
                //log in
            if(!newusers && user.Email&& user.Password){
              signInWithEmailAndPassword(auth,user.Email,user.Password)
              .then(res=>{
               
                const login = {...user}
                user.logIn = true
                login.logIn= "login success"
                setuser(login)
                setLogInuser(login)
                 navigate(from)
                
               
              })
              .catch((error)=>{
                const errors = {...user}
                const reee = 'you are not login'
                error.error = reee
                setuser(errors)
              })
            
          
             
            }
            
          
           
             
      }
    }
           
            e.preventDefault()
            }
            
        
          return (
              <div>
              <div className="certer" style={{textAlign:'center'}}>
                  <h1>Login Form</h1>
                  <input type="checkbox" onChange={()=>setNewusers(!newusers)} name="Name" id="" />
                   <label htmlFor="Name">New User</label></div>
         
                <form onSubmit={onsubmit}>
                <div class="container"  style={{textAlign:'center'}}>
      
      { newusers &&  <input type="text" onChange={handleChange} placeholder='Full Name' name="Name" id="" />}
        
          
          <input type="text"onChange={handleChange}  placeholder="Enter Your Email" name="Email" required></input>

      
          <input type="password" onChange={handleChange} placeholder="Enter Password" name="Password" required></input>
          {
           
          }

      <input type="submit" value={newusers ? 'sigUp': 'signIn'} />
      {user.error && <h1 style={{color:'red'}}>You are already Email use</h1>}

     {user.success && <h1 style={{color:'green'}}>user cretesuccessfully</h1>}
     {user.logIn && <h1 style={{color:'green'}}>login successfully</h1>}
   
    
     
   
          
        </div>
        </form>

        <div class="container" style={{textAlign:'center'}}>
          <button type="button" class="cancelbtn">Cancel</button><br />
          <button type="button" class="cancelbtn" style={{backgroundColor:'pink'}}>Forget</button><br /> <a href="#" >password?</a>
        </div>

                  
              </div>
          );
      };

      export default Login;