import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography  } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = () => {
    const navigate = useNavigate();
  
    return (
      <AppBar position="relative">
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
              Small Businesses App
         </Typography>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navigation;