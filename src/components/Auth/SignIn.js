import React, { useState, useContext } from 'react';

import * as firebase from "firebase/app";
import "firebase/auth";
import './SignIn.css';
import firebaseConfig from './firebaseConfig';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../Home/Header/Header';
firebase.initializeApp(firebaseConfig);
const SignIn = () => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    newUser: false,
    name: '',
    password: '',
    email: '',
    photo: ''
  });


  //CONTEXT
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  const history = useHistory();
  const location = useLocation();
  let {from} = location.state || {from: {pathname: "/"}};
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbprovider = new firebase.auth.FacebookAuthProvider();
  const fbSignIn = () => {
    firebase.auth().signInWithPopup(fbprovider).then(function(result) {
      
        // The signed-in user info.
        var user = result.user;
        // ...
        const {displayName, email} = result.user;
        const signInUser = {
          name: displayName,
          email: email
        }
       
        setLoggedInUser(signInUser);
        history.replace(from);
       
        
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        console.log(email);
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }
  const handleSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
      const {displayName, photoURL, email} = res.user;
      const signInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL
      }
     
      setUser(signInUser);
      setLoggedInUser(signInUser);
      
      history.replace(from);
      
    }).catch(err => {
        console.log(err);
    })
  }

  const handleSignOut = () => {
    const signedOutUser = {
      isSignedIn: false,
      name: '',
      photo: '',
      email: ''
    }
    setUser(signedOutUser);
  }
  const handleBlur = (e) => {
    let isFormValid = true;
    if (e.target.name === 'email') {
     isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
     
    }
    
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value)
      isFormValid =  isPasswordValid && passwordHasNumber;
    }
    if (isFormValid) {
      const newUserInfo = {...user};
      
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
      
    }
  }
  const handleSubmit = (e) => {
      //checking 
    if ( newUser && user.email && user.password) {
        //creates user with email/password
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const {displayName, email} = res.user;
        const signInUser = {
        
        name: displayName,
        email: email
      }
        setLoggedInUser(signInUser)
        history.replace(from)
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
      
        var errorMessage = error.message;
        console.log(errorMessage, errorCode);
        // ...
      });
    }
    //checking
    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const {displayName, email} = res.user;
        const signInUser = {
          
          name: displayName,
          email: email
        }
          
          setLoggedInUser(signInUser);
          history.replace(from);
          
        })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });
    }
    // comes from input form
    e.preventDefault();
  }

  const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
      photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });
  }
  
  return (
    <div className="sign-in-container">
        <Header user=''></Header>
        <div className="auth">
          
            <h1>Login</h1>
            <input type="checkbox" onChange={() => {
                setNewUser(!newUser)
                }} name="" id=""/>
                <label htmlFor="newUser">New User??</label>
            <form onSubmit={handleSubmit}>
                {
                    newUser && <input className="info-in" type="text" onBlur={handleBlur} name="name" required/>
                }
                <br/>
                {
                    newUser && <input className="info-in" type="text" onBlur={handleBlur} name="name" required/>
                }
                
                <br/>
            <input className="info-in" type="text" onBlur={handleBlur} name="email" required/><br/>
            <input className="info-in" type="password"  onBlur={handleBlur} name="password" id="" required/>
            <br/>
            <input type="submit" value="submit"/>
            </form>
            
        </div>
        <button className="login-link2" onClick={handleSignIn}>sign in with google</button>
        <button className="login-link2" onClick={fbSignIn}>signin with facebook</button>
    </div>
    );
};

export default SignIn;