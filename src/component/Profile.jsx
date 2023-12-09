import React, { useState } from "react";
import ProfileGrid from './ProfileGrid';
import logo1 from "../Images/moptro small.png"; // Replace with your image path
import logo2 from "../Images/help.png"
import "../CSS/Profile.css";
import { useNavigate } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { FaUserAlt } from 'react-icons/fa';


function Profile() {
  const navigate = useNavigate();
  const data1 = {
    name: 'John Doe',
    empId: 1,
    dob: '01-01-1990',
    role: 'Software Engineer',
  };

  const data2 = {
    name: 'Jane Smith',
    empId: 2,
    dob: '05-05-1985',
    role: 'Web Developer',
  };

  const data3 = {
    name: 'Bob Johnson',
    empId: 3,
    dob: '10-10-2000',
    role: 'Data Scientist',
  };
  const data4 = {
    name: 'SubhashGowda S',
    empId: 4,
    dob: '1-1-2024',
    role: 'FrontEnd Web Developer',
  };
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
      <div>
        <button className="buttonstyle">Search with Name</button>
      </div>

      <div className="style1">
        <ProfileGrid data={data1} />
      </div>
      <div className="style2">
        <ProfileGrid data={data2} />
      </div>
      <div className="style1">
        <ProfileGrid data={data3} />
      </div>
      <div className="style2">
        <ProfileGrid data={data4} />
      </div>
      <div className="footer">

        <div className="footer1">
          <button className={selectedButton === 1 ? 'highlighted' : ''} onClick={() => handleButtonClick(1)} style={{ fontSize: '24px', color: 'green' }}><IoMdHome /></button>
        </div>
        <div className="footer2">
          <button className={selectedButton === 2 ? 'highlighted' : ''} onClick={() => handleButtonClick(2)} style={{ fontSize: '24px', color: 'green' }}><FaUserAlt /></button>
        </div>
      </div>
    </div>
  );
};

export default Profile;