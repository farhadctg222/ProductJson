import React, { useState } from 'react';
import firebaseConfig from '../../firebase/FirbaseConfig';
import {getAuth,GoogleAuthProvider,signInWithPopup, signOut}from 'firebase/auth'
import {Link} from 'react-router-dom';
import './Reg.css'


const Reg = () => {
    const [user,setuser]= useState({
        isSignUser: false,
        displayName:'',
        email:'',
        photo:''
    })
    const signIn= ()=>{
        signInWithPopup(auth,provider)
        .then(res=>{
            const {displayName,email,photoURL} = res.user
            const isSign = {
                isSignUser: true,
                displayName:  displayName,
                email: email,
                photo:photoURL
            }
            setuser(isSign)
        })
       
       
    }
    const signout = ()=>{
        signOut(auth,provider)
        .then(res=>{
            const isSignout={
                isSignUser: false,
            displayName:'',
            email:'',
            photo:''
            }
            setuser(isSignout)
        })
    }
     const auth = getAuth()
    const  provider = new GoogleAuthProvider()
    
    
    return (
        <div style={{textAlign:'center'}}>
        { user.isSignUser&& <div> <h1>Welcome to Get Member</h1>
            <h1>Welcome Mr.{user.displayName}</h1>
            <h2>Your Email:{user.email}</h2>
            <img src={user.photo} alt="photo" /><br /></div>}
 {user.isSignUser===false ?<div><button onClick={signIn}>SignIn</button></div> :<div> <button onClick={signout}>SignOut</button></div>}

<Link to="/signup"><button className='signups'>SignUp</button></Link>  
            
        </div>
    );
};

export default Reg;