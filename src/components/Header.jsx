import React from 'react';
import { useState, useEffect, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext'
import '../css-files/Header.css'

const Header = () => {
    const {user, setUser} = useContext(UserContext);
    const [navAway, setNavAway] = useState(false)
    const navigate = useNavigate()

    function handleClickViewPhotos () {
        return navigate('/view-photos')
     }
     
     function handleClickUpdateAccount () {
        
         return navigate('/update-account')
      }
     
      function handleClickUploadPhotos () {
         return navigate('/upload-photos')
      }
     
      function handleClickListenMixes () {
         setNavAway(() => {return true})
         return navigate('/listen-mixes')
      }
     
      function handleClickGetInfo () {
         setNavAway(() => {return true})
         return navigate('/get-info')
      }

      function handleClickDashboard () {
        setNavAway(() => {return true})
        return navigate('/dashboard')
     }



    return (
        <div className='header'>
            <div className='grid-box-1'>
            <div class="dropdown">
    <button class="dropbtn">Menu &#8628;</button>
    <div class="dropdown-content">
    <div onClick={handleClickViewPhotos}><h1>View Photos</h1></div>
    <div onClick={handleClickUploadPhotos}><h1>Upload Photos</h1></div>
    <div onClick={handleClickListenMixes}><h1>Listen to Mixes</h1></div>
    <div onClick={handleClickGetInfo}><h1>Get the latest info</h1></div>
    <div onClick={handleClickUpdateAccount}><h1>Update Account</h1></div>
    <div onClick={handleClickDashboard}><h1> &#8592; Back to dashboard</h1></div>
    </div>
    </div>
        </div>
            <div className='grid-box-2'><h1>logged in as: {`${user.name}`} <u></u></h1></div>
        </div>
    );
};

export default Header;
