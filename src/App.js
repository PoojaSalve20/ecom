 
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 
import Collaborators from './components/Collaborate/Collaborate';
import Login from './components/Login/Login';
import Profile from './components/profile/Profile';
import Register from './components/Signup/Signup';
import Home from './containers/Home/Home';


function App() {
  return (
     <Router>
       <Routes>
        
          <Route exect path = "/" element = {<Home/>}/>  
          <Route path = "/register" element = {<Register/>}/>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/profile" element = {<Profile/>}/>
          <Route path = "/collaborate" element = {<Collaborators/>}/>
       </Routes>
     </Router>
  );
}

export default App;
