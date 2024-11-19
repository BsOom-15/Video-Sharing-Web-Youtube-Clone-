import React from 'react'
import './App.css'
import Menu from './Components/Menu/Menu';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home/Home';
import VideoPage from './pages/VideoPage/VideoPage';
import Signin from './pages/Signin/Signin';
const App = () => {
  return (

    // <Router
    // future={{
    //   v7_startTransition: true,
    //     v7_relativeSplatPath: true,
    // }}
    // >

    <div className='app-container'>

        <Menu />
        <div className="main">
        <Navbar />
        <div className="video-cards">
        <Routes>
            <Route path='/*'>
              <Route index element={<Home />} />
              <Route path='signin' element={<Signin />} />
              <Route path='video'>
                <Route path=':id' element={<VideoPage />} />
              </Route>
            </Route>
        </Routes>
        </div>
        </div>
      
    </div>
    // </Router>
  )
}

export default App