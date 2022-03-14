import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from "./pages/Home"
import Videos from "./pages/Videos"
import Search from "./components/Search"
import Upload from "./pages/Upload"
import { connectWallet, loadBlockchainData } from './components/ConnectWallet.js'

class App extends Component {

  async componentDidMount() {
    let account = await connectWallet()
    let contract = await loadBlockchainData()
    this.setState({ dvideo: contract })
    this.setState({ account: account })
  }

  //Change Video
  changeVideo = (hash, title) => {
    this.setState({ 'currentHash': hash })
    this.setState({ 'currentTitle': title })
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
            <Route path="/search" element={
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