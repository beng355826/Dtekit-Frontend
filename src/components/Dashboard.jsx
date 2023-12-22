import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom';
import '../css-files/Dashboard.css'
import Header from './Header';

export const Dashboard = ({isMenuOpen, setMenuOpen}) => {
    const {user, setUser} = useContext(UserContext);
    const [navAway, setNavAway] = useState(false)
    const navigate = useNavigate()

   

useEffect(() => {
    if(!user) navigate('/')    
}, []);





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


    return(
        <div>
        <Header />
        <main className='main'>
        <section onClick={() => {handleClickViewPhotos()}} className='view-photos'><h1>View Photos</h1></section>
        <section onClick={() => {handleClickUpdateAccount()}} className='update-account'><h1>Update account!</h1></section>
        <section onClick={() => {handleClickUploadPhotos()}} className='upload-photos'><h1>Upload Photos</h1></section>
        <section onClick={() => {handleClickListenMixes()}} className='listen-mixes'><h1>Listen to Mixes</h1></section>
        <section onClick={() => {handleClickGetInfo()}} className='get-info'><h1>Get the latest info on detkit'24</h1></section>
        </main>
        </div>
    )
}

export default Dashboard;
