import React, { useState } from "react";
import { Box } from "@mui/material";
import logo1 from "../Images/moptro small.png";
import logo2 from "../Images/help.png";
import '../CSS/Productivity.css';
import { useNavigate } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { FaUserAlt } from 'react-icons/fa';

const Productivity = () => { 
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    if (buttonId === 1) {
      navigate(`/productivity`);
    } else if (buttonId === 2) {
      navigate(`/profile`);
    } else {
      navigate(`/`);
    }
  };

  return (
    <div>
      <div>
        <img src={logo2} alt="hello" className="logo2" />
        <img src={logo1} alt="hello" className="logo1" />
      </div>
      <form>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={400}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          marginTop={0}
          padding={2}
        >
          <button className="buttonstyle">Employee Productivity Dashboard</button>
          <table>
          
            <tr>
              <td>
                <pre>Productivity on Monday </pre>
                <aside className="aside4per"></aside>
              </td>
              <td>4%</td>
            </tr>
            <tr>
              <td>
                <pre>Productivity on Tuesday </pre>
                <aside className="aside98per"></aside>
              </td>
              <td>98%</td>
            </tr>
            <tr>
              <td>
                <pre>Productivity on Wednesday </pre>
                <aside className="aside122per"></aside>
              </td>
              <td>122%</td>
            </tr>
            <tr>
              <td>
                <pre>Productivity on Thursday </pre>
                <aside className="aside93per"></aside>
              </td>
              <td>93%</td>
            </tr>
            <tr>
              <td>
                <pre>Productivity on Friday </pre>
                <aside className="aside89per"></aside>
              </td>
              <td>89%</td>
            </tr>
            <tr>
              <td>
                <pre>Productivity on Saturday </pre>
                <aside className="aside98per"></aside>
              </td>
              <td>98%</td>
            </tr>
          </table>
        </Box>
      </form>
      <div className="footer">
        <div className="footer1">
          <button className={selectedButton === 1 ? 'highlighted' : ''} onClick={() => handleButtonClick(1)} style={{ fontSize: '24px', color: 'green' }}>
            <IoMdHome />
          </button>
        </div>
        <div className="footer2">
          <button className={selectedButton === 2 ? 'highlighted' : ''} onClick={() => handleButtonClick(2)} style={{ fontSize: '24px', color: 'green' }}>
            <FaUserAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productivity;
