require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@eth-optimism/plugins/hardhat/compiler");
require("@eth-optimism/plugins/hardhat/ethers");

module.exports = {
  networks: {
    optimism: {
      url: process.env.L2_NODE_URL || "https://sepolia.optimism.io",
      accounts: [
        "4d6490113ff7df501386745fb6dd7ae1d9dbd74be968b8510f6940fd1295e238",
      ],
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.7.3",
      },
    ],
  },
};
