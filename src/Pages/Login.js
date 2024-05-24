import React, { useState } from 'react';
import './Login.css';
import Editor from './Editor.js';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    loginType: '',
    captcha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to a server or API
    console.log('Form data submitted:', formData);
    alert('Login submitted successfully!');
  };

  const handleReset = () => {
    setFormData({
      username: '',
      password: '',
      loginType: '',
      captcha: '',
    });
  };

  const gotoeditor = () =>{
   window.open('/editor','_blank');
  
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>

        <form onSubmit={handleSubmit} >
          <div className="form-group input-container">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="input-field" placeholder="Enter your username" 
            />
            
          </div>
          <div className="form-group input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input-field" placeholder="Enter your password" 
            />
          </div>
          <div className="form-group ">
            <label htmlFor="loginType">Login type</label>
            <select
              id="loginType"
              name="loginType"
              value={formData.loginType}
              onChange={handleChange}
              required
              
            >
              <option value="">Select Login Type</option>
              <option value="moderator">Moderator</option>
              <option value="editor">Editor</option>

            </select>
          </div>
          
          <div className="button-group">
            <button type="submit" onClick={gotoeditor}>Login</button>
            <button type="button" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
