require("@nomicfoundation/hardhat-toolbox");

// import { INFURA_API, MAIN_ACCOUNT } from "addresses.js";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // goerli: {
    //   url: `https://goerli.infura.io/v3/${INFURA_API}`,
    //   accounts: [MAIN_ACCOUNT],
    //   chainId: 5,
    // },
  },
};
