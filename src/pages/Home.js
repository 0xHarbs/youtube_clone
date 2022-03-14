import React from 'react'
import Sidebar from '../components/Sidebar';
import RecommendedVideos from '../components/RecommendedVideos';
import '../App.css';

function Home() {
    return(
    <div className="app__page">
    	<Sidebar />
        <RecommendedVideos />
    </div>
)
}


export default Home;