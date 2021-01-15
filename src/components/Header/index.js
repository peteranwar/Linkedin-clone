import {useState} from 'react';
import './style.scss'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';

import linkedin from '../../assets/images/linked-in.png'
import HeaderOption from './HeaderOption'
import  SupervisorAccountIcon  from '@material-ui/icons/SupervisorAccount';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import { auth } from '../../firebase';

const Header = () => {
   const dispatch = useDispatch()

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut()
    }


    return (
        <div className="header-container">
            <div className="left">
                <img src={linkedin} alt=""/>
                <div className="search">
                    <SearchIcon />
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <div className="logout" title="Log Out">
                <HeaderOption 
                onClick={logoutOfApp}
                avatar="-" title="me"  />
            </div>
            </div>
        </div>
    )
}

export default Header
