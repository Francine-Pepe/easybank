import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuClose from "./../Images/icon-close.svg";

export default function Dropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {/* <button type="button" className="hamburger">
              <span className="line"></span>
              <span className="line"></span>
              
          </button> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="11">
          <g fill="#2D314D" fillRule="evenodd">
            <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
          </g>
        </svg>
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiPaper-root ": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            marginTop: "5em",
          },
        }}
      >
        {/* <Button>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19">
          <g fill="#2D314D" fill-rule="evenodd">
            <path d="M.868.661l16.97 16.97-.706.708L.162 1.369z" />
            <path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z" />
          </g>
        </svg>
      </Button> */}
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>About Us</MenuItem>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
        <MenuItem onClick={handleClose}>Blog</MenuItem>
        <MenuItem onClick={handleClose}>Careers</MenuItem>
      </Menu>
    </div>
  );
}
