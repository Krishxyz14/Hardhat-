/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle")

const ALCHEMY_API_KEY="itiTFZLFgi3z8xnwrzTyXPD-MZ3uyNF8";
const RINKEBY_PRIVATE_KEY="1a4278eff114ebe8fc745096f6342b3d6c60ca7122f0c8fc4db343715baff4df";
module.exports = {
  solidity: "0.8.9",

  networks:{
    rinkeby:{
      url:`https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts:[`${RINKEBY_PRIVATE_KEY}`]
    }
  }
};
