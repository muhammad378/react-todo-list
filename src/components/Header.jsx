import React from 'react'
import lightIcon from "../assets/images/icon-sun.svg";
import darkIcon from "../assets/images/icon-moon.svg";

const Header = ({ theme, toggleTheme }) => {
  return (
    <div className="header">
      <h1 className="title">TODO</h1>
      <button aria-label="Switch Theme" className="btn-switch" onClick={() => toggleTheme()}>
       { theme === 'light' ? <img src={darkIcon} alt="Dark Icon" /> : <img src={lightIcon} alt="Light Icon" />}
      </button>
    </div>
  )
}

export default Header