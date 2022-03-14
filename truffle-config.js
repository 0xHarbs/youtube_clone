require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const private_keys = [
  process.env.PRIVATE_KEY_0,
  process.env.PRIVATE_KEY_1,
]

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider({
        private_keys: process.env.PRIVATE_KEY_0,
        providerOrUrl: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
        numberOfAddresses: 1,
        mnemonic: process.env.SECRET_KEY
      }
      ),
      network_id: 4,
      gas: 6500000,
      gasPrice: 10000000000,
      confirmations: 2,
      timeoutBlocks: 200,
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "^0.8.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
