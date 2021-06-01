import React from "react";
import DateRangeSharpIcon from '@material-ui/icons/DateRangeSharp';

function Header() {
  return (
    <header>
      <div className="nav-header">
        <div className = "header-icon">
      <DateRangeSharpIcon />
        </div>
      <h1>Keeper</h1>
      </div>
    </header>
  );
}

export default Header;
