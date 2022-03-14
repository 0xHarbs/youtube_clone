import React from 'react'
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import './App.css';

function Home() {
    const [isOpen, setIsOpen] = useState(false)

    return(
    <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
    </div>
)
}


export default Home;