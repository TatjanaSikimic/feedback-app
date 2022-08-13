import React from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from "./components/AboutIconLink"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutPage from "./components/pages/AboutPage"
import { FeedbackProvider } from "./context/FeedbackContext"

function App(){
    return (
        <FeedbackProvider>
        <BrowserRouter>
            <Header />
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                        <><FeedbackForm/>
                        <FeedbackStats />
                        <FeedbackList/>
                        </>}/>
                        <Route path='/about' element={<AboutPage/>}>This is the about route</Route>
                    </Routes>
                    {/* <Route path='/about'>This is the about route</Route> */}
                <AboutIconLink></AboutIconLink>
                </div>
        </BrowserRouter>
    </FeedbackProvider>
       

        
    )
}

export default App