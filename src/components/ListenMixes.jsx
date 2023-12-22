import { useState, useEffect, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext'
import Header from './Header';

function ListenMixes () {

    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate()
   

useEffect(() => {
    if(!user) navigate('/')    
}, []);

    return (
        <div>
            <Header />
        </div>
    )


}

export default ListenMixes