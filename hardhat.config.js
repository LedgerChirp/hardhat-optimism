/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@eth-optimism/plugins/hardhat/compiler");
require("@eth-optimism/plugins/hardhat/ethers");
module.exports = {
	solidity: "0.8.4",
	paths: {
		artifacts: "./frontend/src/artifacts",
	},
	networks: {
		hardhat: {
			chainId: 1337,
		},
		optimism: {
			url: process.env.L2_NODE_URL,
			accounts: [process.env.PRIVATE_KEY],
		},
	},
};
