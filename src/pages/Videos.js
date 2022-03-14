import React, { Component } from "react";
import '../App.css';
import WatchVideoCard from '../components/WatchVideoCard';
import VideoSideBar from '../components/VideoSideBar';
import {connectWallet, loadBlockchainData, getLatest} from '../components/ConnectWallet.js'

class Videos extends Component {
    async componentDidMount() {
        let account = await connectWallet()
        let contract = await loadBlockchainData()
        let videoCode = await this.getVideoCode()
        let [hash, title, author, date, videoCount] = await getLatest(contract, videoCode)
        this.setState({contract})
        this.setState({account})
        this.setState({hash})
        this.setState({title})
        this.setState({author})
        this.setState({date})
        this.setState({videoCount})
        await this.loadVideos()
    }

    async getVideoCode() {
        const queryString = window.location.search
        const sp = new URLSearchParams(queryString)
        let videoCode = sp.get("link")
        return videoCode
    }

    async loadVideos() {
        for (var i=this.state.videoCount; i >=1; i--) {
            const video = await this.state.contract.methods.videos(i).call()
            this.setState({
                videos: [...this.state.videos, video]
            })
        }
    }


    constructor(props) {
        super(props)
        this.state = {
          buffer: null,
          account: "",
          contract: null,
          hash: null,
          videos: []
        }
  }

    render() {
    return(
    <div className="app__page">
        <WatchVideoCard 
        currentHash={this.state.hash}
        title={this.state.title}
        author={this.state.author}
        date={this.state.date}
        tips={this.state.tips}
        />
        <VideoSideBar 
        videos={this.state.videos}
        />
    </div>
)
}
}

export default Videos;