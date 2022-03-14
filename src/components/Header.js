import React, {useState} from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";

function Header() {
	const [inputSearch, setInputSearch] = useState('')

	return(
		<div className="header">
		
		<div className="header__left">
		<MenuIcon />
		<Link to="/">
		<img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
		alt=""/>
		</Link>
		</div>

		<div className="header__input">
		<input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
		<Link className="link" to={`/search?${inputSearch}`}>
		<SearchIcon className="header__inputButton"/>
		</Link>
		</div>

		<div className="header__icons">
		<VideoCallIcon 
		className="header__icon"
		onClick={(e) => (window.location.href="upload")}
		/>
		<AppsIcon className="header__icon"/>
		<NotificationsIcon className="header__icon"/>
		<Avatar 
			alt=""
			src="#"
			/>
		</div>
		</div>
		);
}

export default Header;