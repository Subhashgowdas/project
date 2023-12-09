import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {useNavigate} from 'react-router-dom'
import logo from '../Images/home.png'
import '../CSS/Login.css'
const Login = () => {
    const navigate =useNavigate();
    const handleSubmit = () => {
        navigate('/productivity');
    };
    return(
        <div>
             <div >
                <img src={logo} alt="hello" className="logoele" />
            </div>  
            <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"auto"}
          marginTop={0}
          padding={2}

        >
          <Typography variant="h6" padding={3} textAlign={"center"} className="typography" >We are Electric</Typography>
          <TextField InputProps={{ style: { color: "white" } }} margin="normal" type="email" placeholder="E-mail" className="custom-textfield" ></TextField>
          <TextField InputProps={{ style: { color: "white" } }} margin="normal" type="password" placeholder="password" className="custom-textfield"></TextField>
          
          <br/>
          
          <button className="custom_button" onClick={handleSubmit}>Login</button>
          <Typography fontSize={18} margin="2rem" className="typography">Forgot password?</Typography>

        </Box>
      </form>
        </div>
    )
}

export default  Login;