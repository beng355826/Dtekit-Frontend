import { useState, useEffect, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext'
import '../css-files/Login.css'
import '../css-files/button.css'
import '../css-files/Loader.css'

import { postLogin} from '../Api';

function Login ({setMenuOpen, isMenuOpen}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState()
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext);


    useEffect(() => {
        setMenuOpen(false)
    }, []);

console.log(email);


  function handleSubmit(event) {

    event.preventDefault()

    setIsLoading('true')
    postLogin(email,password).then((data) => {
        
        setUser(data)
        localStorage.setItem('user', JSON.stringify(data))
       navigate('dashboard')

         
    }).catch(() => {
        setIsLoading('false')
        setLogInError(true)
        
    })

    

   }

        
    
return (

    <div>
    <h1 className='title'>Dtekit Anyone?</h1>

    <main className='login-box-1'>
        <form  onSubmit={handleSubmit} >


<section className="login-box-2">  
    <div className='email-password'>
            <label>Email: </label>
            <input onChange={(e) => {setEmail(e.target.value)}} placeholder='......'></input>
    </div>

    <div className='email-password'>
            <label>Password: </label>
            <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder='......'></input>
    </div>

    <div className='button'>
            <button className="button-login" role="button" type="submit" >Log in</button>
    </div>

</section>  
        </form>
    </main>
    <footer>
        {!isLoading ? null : isLoading==='true' ? <div class="ring">Loading<span></span>
        </div>: <p className='wrongUser'>Wrong numpty 😢</p>} 
    </footer>
   
    </div>
)

}

export default Login


// <div class="loader"> </div