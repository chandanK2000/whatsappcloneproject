import React from 'react'
import {Dialog} from "@mui/material";

const dialogStyle={
  height:'96% !important',
  marginTop:'12%',
  width:'60%',
  maxWidth:'100%',
  maxHeight:'100%',
  boxShadow:'none',
  overflow:'none'
}
const LoginDialog = () => {
  return (
    <Dialog open={true} paperProps={{sx:dialogStyle}}>
      Hello from Login
    </Dialog>
  );
}

export default LoginDialog;