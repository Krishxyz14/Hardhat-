/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle")

const INFURA_API_KEY="7a308ec8442040c292c46baac51ddd6b";
const ROPSTEN_PRIVATE_KEY="1a4278eff****************************************";
module.exports = {
  solidity: "0.8.9",

  networks:{
    ropsten:{
      url:`https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
      accounts:[`${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};
