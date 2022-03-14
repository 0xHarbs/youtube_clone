import React, { Component } from "react";
import Web3 from 'web3';
import DVideo from './abis/DVideo.json'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from "./pages/Home"
import Videos from "./pages/Videos"
import Search from "./components/Search"
import Upload from "./pages/Upload"
import {connectWallet, loadBlockchainData} from './components/ConnectWallet.js'

const {create} = require('ipfs-http-client')
const ipfs = create({host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

class App extends Component {

  async componentDidMount() {
    let account = await connectWallet()
    let contract = await loadBlockchainData()
    this.setState({dvideo: contract})
    this.setState({account: account})
}

  // async componentDidMount() {
  //   await this.connectWallet()
  //   await this.loadBlockchainData()
  // }

  // async connectWallet() {
  //   if (window.ethereum) {
  //     try {
  //       const accounts = await window.ethereum.request({ method: "eth_requestAccounts"})
  //       this.setState({account: accounts[0]})
  //       console.log("Stored as", this.state.account)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   } else{
  //     window.alert('Please install MetaMask')
  //   }
  // }

  //     async loadBlockchainData() {
  //     const web3 = new Web3(window.ethereum)

  //     // We get the networkId from the browser
  //     const networkId = await window.ethereum.request({method: 'net_version'})

  //     // We use the Id as a key to find the network in the Decentragrma json file
  //     const networkData = DVideo.networks[networkId]
      
  //     if (networkData) {
  //       // We get the ABI using the imported json and the address with the network Id
  //       const dvideo = new web3.eth.Contract(DVideo.abi, networkData.address)
  //       this.setState({dvideo})
  //       const videoCount = await dvideo.methods.videoCount().call()
  //       this.setState({ videoCount })

  //     this.setState({ loading: false })
  //   }
  // }

  // captureFile = event => {

  //     event.preventDefault()
  //     const file = event.target.files[0]
  //     const reader = new window.FileReader()
  //     reader.readAsArrayBuffer(file)

  //     reader.onloadend = () => {
  //       this.setState({ buffer: Buffer(reader.result) })
  //       console.log('Completed capture: buffer', this.state.buffer)
  //     }
  //   }

  //  uploadVideo = async description => {
  //     console.log("Submitting file to ipfs...")
  //     console.log("Description passing: ", description)
  //     console.log(this.state.buffer)
  //     console.log(ipfs)

  //     let result = await ipfs.add(this.state.buffer)
  //     console.log("Result is: ", result.path)
  //     this.state.decentragram.methods.uploadImage(result.path, description).send({ from: this.state.account }).on('transactionHash', (hash) => {
  //       console.log("Uploaded to Dvideo")
  //     })
  //   }

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
      dvideo: null,
      videos: [],
      videosCount: 0,
      loading: true,
      currentHash: null,
      currentTitle: null
    }
  }

  render() {
  return (
    <div className="app">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={
            <Home 
            videos={this.state.videos}
            />
          }>
          </Route>
          <Route path="/videos" element={
            <Videos 
            videos={this.state.videos}
            />
          }>
          </Route>
           <Route path="/upload" element={
            <Upload />
          }>
          </Route>
        {/* Not working for some reason */}
          <Route path ="/search" element={
            <Search 
            videos={this.state.videos}
            />
          }>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}
}

export default App;