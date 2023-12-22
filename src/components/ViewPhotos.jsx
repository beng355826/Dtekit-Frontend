import { useState, useEffect, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext'
import { getAllPhotos } from '../Api';
import Header from './Header';
import '../css-files/View-Photos.css'

function ViewPhotos ({setMenuOpen, isMenuOpen}) {

    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate()
    const [photos, setPhotos] = useState([]);

useEffect(() => {
    if(!user) navigate('/')    


getAllPhotos().then((data) => {
    console.log(data);
    setPhotos(data);
}).catch((err) => {
    console.log(err);
})

}, []);



return (
      
<div>
<Header/>
<div className='container'>

<div className="photo-gallery">
      {photos.map(photo => (
        <div key={photo.name} className="photo-item">
          <img src={photo.publicUrl} alt={photo.name} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>

</div>



</div>


)



}

export default ViewPhotos