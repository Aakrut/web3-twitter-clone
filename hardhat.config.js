require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai:{
      url:process.env.URL,
      accounts:[process.env.PRIVATE_KEY]
    }
  },
  paths: {
    artifacts:"./artifacts"
  }
};
