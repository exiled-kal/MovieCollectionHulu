import React from 'react';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <div class="header__icon">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div class="header__icon">
        <FlashOnIcon />
        <p></p>
        </div>
        <div class="header__icon">
            <LiveTvIcon />
            <p></p>
        </div>
        <div class="header__icon">
            <VideoLibraryIcon />
            <p></p>
        </div>
        <div class="header__icon">
            <SearchIcon />
            <p></p>
        </div>
        <div class="header__icon">
            <PersonOutlineIcon />
        </div>
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt=""
      />
    </div>
  );
}

export default Header;
