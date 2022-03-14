import React from 'react'
import './SearchPage.css'
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"

function SearchPage() {
    return(
    <div className="searchPage">
       <div className="searchPage__filter">
    	<TuneIcon/>
    	<h2>FILTER</h2>
    </div>
    <hr/>
    <ChannelRow
    image="https://pbs.twimg.com/profile_images/1476491776068362241/pod8P-jn_400x400.png"
    channel="MrHarbs"
    verified
    subs="400k"
    noOfVideos={4}
    description="You can find the best coding advice here"
    />
    <hr/>
    <VideoRow
    title="How to become a web dev in 10 minutes"
	views="2.3m Views"
	timestamp="3 days ago"
	channelImage="https://pbs.twimg.com/profile_images/1476491776068362241/pod8P-jn_400x400.png"
	channel="MrHarbs"
	subs="100k"
	description="Creating the most concise coverage of how to be a web dev this year...."
	image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
	/>
	   <VideoRow
    title="How to become a web dev in 10 minutes"
	views="2.3m Views"
	timestamp="3 days ago"
	channelImage="https://pbs.twimg.com/profile_images/1476491776068362241/pod8P-jn_400x400.png"
	channel="MrHarbs"
	subs="100k"
	description="Creating the most concise coverage of how to be a web dev this year...."
	image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
		/>
    </div>
)
}


export default SearchPage;