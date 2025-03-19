import React from "react";
import Eth from "../eth.svg";
import { Link } from "react-router-dom";

function Header(props) {

  const {address, isConnected, connect} = props;

  return (
    <header>
      <div className="leftH">
        <div className="logo-container">
          <svg 
            width="50" 
            height="50" 
            viewBox="0 0 300 300" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="logo"
          >
            <rect width="300" height="100" fill="#333333" />
            <rect x="100" y="100" width="100" height="200" fill="#333333" />
            <rect x="50" y="100" width="50" height="25" fill="#333333" />
            <rect x="200" y="100" width="50" height="25" fill="#333333" />
          </svg>
        </div>
        <Link to="/" className="link">
          <div className="headerItem">Swap</div>
        </Link>
        <Link to="/tokens" className="link">
          <div className="headerItem">Tokens</div>
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Ethereum
        </div>
        <div className="connectButton" onClick={connect}>
          {isConnected ? (address.slice(0,4) +"..." +address.slice(38)) : "Connect"}
        </div>
      </div>
    </header>
  );
}

export default Header;
