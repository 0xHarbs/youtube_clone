import Web3 from 'web3';
import DVideo from '../abis/DVideo.json'

async function connectWallet() {
	if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts"})
        let account = accounts[0]
        return account
      } catch (error) {
        console.log(error)
      }
    } else{
      window.alert('Please install MetaMask')
    }
}

async function loadBlockchainData() {
	const web3 = new Web3(window.ethereum)

	// We get the networkId from the browser
	const networkId = await window.ethereum.request({method: 'net_version'})

	// We use the Id as a key to find the network in the Decentragrma json file
	const networkData = DVideo.networks[networkId]

	if (networkData) {
		// We get the ABI using the imported json and the address with the network Id
		const dvideo = new web3.eth.Contract(DVideo.abi, networkData.address)
		return dvideo
    }
}

async function getLatest(contract, video) {
	const videoCount = await contract.methods.videoCount().call()
	const latest = await contract.methods.videos(video).call()
	return [latest.hash, latest.title, latest.author, latest.uploadDate, videoCount]
}

 

export { connectWallet, loadBlockchainData, getLatest};