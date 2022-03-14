import React, { Component } from "react";
import './RecommendedVideos.css'
import VideoCard from './VideoCard'
import {connectWallet, loadBlockchainData} from '../components/ConnectWallet.js'

class RecommendedVideos extends Component {

	async componentDidMount() {
	    let account = await connectWallet()
	    let contract = await loadBlockchainData()
	    this.setState({contract: contract})
	    this.setState({account: account})
	    await this.loadVideos()
    }

    async loadVideos() {
    const videoCount = await this.state.contract.methods.videoCount().call()
    this.setState({videoCount})

    // Load videos
      for (var i=videoCount; i > 0; i--) {
        const video = await this.state.contract.methods.videos(i).call()
        this.setState({
          videos: [...this.state.videos, video]
        })
      }
      this.setState({ loading: false })
    }

    constructor(props) {
    super(props)
    this.state = {
      buffer: null,
      account: "",
      contract: null,
      loading: false,
      videos: []
    	}
  	}

	render() {
	return(
		<div className="recommendedVideos">
		<h2>Recommended</h2>
		<div className="recommendedVideos__videos">
			{!this.state.loading && this.state.videos && 
				this.state.videos.map((video, key) => (
				<VideoCard
				title={video.title}
				views="2m"
				channelImage="null"
				channel={video.author}
				hash={video.hash}
				id={video.id}
				date={video.uploadDate}
				tips={video.tips}
				/>
			))}
		</div>
		</div>
		)
}}
export default RecommendedVideos;