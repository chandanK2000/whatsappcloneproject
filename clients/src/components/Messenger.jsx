import React from 'react'
import LoginDialog from './account/LoginDialog';
import {Box,AppBar,Toolbar,styled} from "@mui/material";
const Header=styled(AppBar)`
height:220px;
background-color:#00bfa5;
box-shadow:none;    
`
const Component=styled(Box)`
height:100vh;
background-color:#dcdcdc;
`
const Messenger = () => {
  return (
    <Component>
      <Header>
        <Toolbar>

        </Toolbar>
      </Header>
      <LoginDialog/>
    </Component>
  )
}

export default Messenger;