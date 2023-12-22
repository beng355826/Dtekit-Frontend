import './css-files/App.css'
import { useState } from 'react';
import { UserContextProvider } from './contexts/UserContext'
import {Routes, Route} from 'react-router-dom'


import Login from './components/Login'
import Dashboard from './components/Dashboard'
import ViewPhotos from './components/ViewPhotos'
import UploadPhotos from './components/UploadPhotos'
import ListenMixes from './components/ListenMixes'
import UpdateAccount from './components/UpdateAccount'
import GetInfo from './components/GetInfo'


function App() {

    const [isMenuOpen , setMenuOpen] = useState(false);


return (<div>
<UserContextProvider>
<Routes>
<Route path="/" element={<Login setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen} />} />
<Route path="/dashboard" element={<Dashboard setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen}/>} />
<Route path="/view-photos" element={<ViewPhotos setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen}/>} />
<Route path="/upload-photos" element={<UploadPhotos setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen}/>} />
<Route path="/listen-mixes" element={<ListenMixes setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen}/>} />
<Route path="/update-account" element={<UpdateAccount setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen}/>} />
<Route path="/get-info" element={<GetInfo />} />
</Routes>
</UserContextProvider>

</div>
)

}

export default App
