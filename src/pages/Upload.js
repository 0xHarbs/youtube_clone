import React, { Component } from "react";
import '../components/Upload.css';
import UploadIcon from '@mui/icons-material/Upload';
import {connectWallet, loadBlockchainData} from '../components/ConnectWallet.js'

const {create} = require('ipfs-http-client')
const ipfs = create({host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

class Upload extends Component {

    async componentDidMount() {
        let account = await connectWallet()
        let contract = await loadBlockchainData()
        this.setState({contract: contract})
        this.setState({account: account})
    }

    captureVideo = event => {
      const file = event.target.files[0]
      let video = URL.createObjectURL(file)
      this.setState({video: video})
      const reader = new window.FileReader()
      reader.readAsArrayBuffer(file)
      reader.onloadend = () => {
        this.setState({ buffer: Buffer(reader.result) })
        console.log('Completed capture: buffer', this.state.buffer)
      }
    }

    uploadVideo = async title => {
      let today = new Date()  
      let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
      let result = await ipfs.add(this.state.buffer)
      let videoId = await this.state.contract.methods.videoCount().call()
      this.state.contract.methods.uploadVideo(result.path, title, date).send({ from: this.state.account }).on('transactionHash', (hash) => {
        videoId = videoId.toNumber() + 1
        let videostring = `videos?link=${videoId.toString()}`
        window.location.href=videostring
      })
    }

    //Change Video
    changeVideo = (hash, title) => {
      this.setState({'currentHash': hash})
      this.setState({'currentTitle': title})
    }

    constructor(props) {
    super(props)
    this.state = {
      buffer: null,
      account: "",
      contract: null,
    }
  }


    render() {
    return(
    <div className="upload__page">
        <div className="upload__container">
            <h3 className="upload__title">Select a video</h3>
            <hr></hr>
            <div className="upload__options">
                <UploadIcon className="icon" style={{fontSize: 32}}/>
                <h3>Select video files to upload</h3>
                <p>Your videos will be private until you publish them</p>
                <label for="file__input" className="upload__button">Select File</label>
                <input id="file__input" accept=".mp4, .mkv, .ogg, .wmv" type="file" onChange={this.captureVideo}/>
            </div> 
            <div className="upload__outputContainer">
                <input className="upload__titleInput" placeholder="What's the title for your video?" type="text"
                onChange={ (e) => this.setState({title: e.target.value})}  />
                {this.state.video && <video className="upload__output" src={this.state.video} alt=""/>}
                <div className="upload__submit">
                    <label className="upload__button" style={{backgroundColor: '#00AB66'}} 
                    onClick={ (e) => {
                        let title = this.state.title
                        console.log("Title passing is:", title)
                        this.uploadVideo(title)
                    } }
                    >Publish File</label>
                </div>
            </div>
        </div>
    </div>
)
}}


export default Upload;