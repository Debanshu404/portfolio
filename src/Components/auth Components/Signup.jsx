// src/pages/Signup.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import GoogleLoginButton from '../Pages/GoogleLoginButton';
import AuthAnimation from '../auth Components/AuthAnimation';
import { useUserAuth } from '../../Context/UserAuthContext'; 
import './auth.css'
import { use } from 'react';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../firebaseConfig';


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationType, setAnimationType] = useState('');
  const [animationMessage, setAnimationMessage] = useState('');
  const navigate = useNavigate();
  
const {Signup,user}=useUserAuth()

async function handleSubmit(e) {
  e.preventDefault();
  setError('');
  setIsLoading(true);

  if (password !== confirmPassword) {
    setError('Passwords do not match');
    setIsLoading(false);
    return;
  }

  try {
    await Signup(email, password);
    updateProfile(auth.currentUser,{
      displayName:name,
    })
    console.log(auth.currentUser.displayName)
    setAnimationType('success');
    setAnimationMessage('Account created successfully!');
    setShowAnimation(true);
    setTimeout(() => navigate('/login'), 2000);
    console.log(user)
  } catch (err) {
    console.error(err);
    setError(err.message);
  } finally {
    setIsLoading(false);
  }
}


  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Create Account</h2>
          <p>Get started with your free account</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button 
            type="submit" 
            className="auth-button"
            disabled={isLoading}
          >
            {isLoading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>
        
        <div className="divider">
          <span>OR</span>
        </div>
        
        {/* <GoogleLoginButton 
          // onClick={handleGoogleSignup} 
          disabled={isLoading}
          text="Sign up with Google"
        /> */}
        
        <div className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
      
      {showAnimation && (
        <AuthAnimation 
          type={animationType} 
          message={animationMessage}
          onClose={() => setShowAnimation(false)}
        />
      )}
    </div>
  );
};

export default Signup;