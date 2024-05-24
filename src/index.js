import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Editor from "./Pages/Editor";
import Layout from "./Pages/Layout";
// import Login from "./Pages/Login";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About/>} />
        {/* <Route path="Login" element={<Login/>} /> */}
        <Route path="Editor" element={<Editor/>} />
        <Route path="Contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-7j1eyhuvhedl2nmm.us.auth0.com"
    clientId="zJJMoS2K3lu5YGmKBnIE8AUD7BbMCSNl"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>
);

reportWebVitals();






