import React from 'react'
import './sidebar.scss'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
//import DarkModeIcon from '@mui/icons-material/DarkMode';
//import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { Link } from "react-router-dom";
import Login from '../../pages/login/Login';
import { useNavigate } from "react-router-dom";
//import { DarkModeContext } from "../../context/darkModeContext";
//import { useContext } from "react";
//import { logout } from '../../firebase';
import { UserAuth } from '../../context/AuthContext'




const Sidebar = () => {
  const {logout} = UserAuth();
  const navigate = useNavigate();

  // Log out function
  const handleLogout = async() =>{
    try{
    await logout();
      localStorage.removeItem('token');
      navigate("/login");
      //window.localStorage.removeItem("user");
      //console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
    
  }
    
  
  //const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Smart Stand</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <p className="title">SETTINGS</p>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
          
          <li>
          <a onClick={handleLogout} href={Login}><LogoutIcon className="icon"/><span>logout</span></a>
            
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <DarkModeIcon className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        />
        <WbSunnyOutlinedIcon className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        />
      </div>  */}
    </div>
  );
};


export default Sidebar;