import React from 'react'
import "./header.css";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <div className='header-outer-container'>
        <div className='header-container'>
            <div className='header-left'>
                <ul>
                    <li>Netflix</li>
                    <li>Home</li>
                    <li>Tvshows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>Mylist</li>
                    <li>Browse by Languages</li>
                </ul>

            </div>
            <div className='header-right'>
                <ul>
                    <li><SearchIcon/></li>
                    <li><NotificationsIcon/></li>
                    <li><AccountBoxIcon/></li>
                    <li><ArrowDropDownIcon/></li>


                </ul>

            </div>
        </div >
        </div>



    
  )
}

export default Header
