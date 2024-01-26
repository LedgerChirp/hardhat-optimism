// scripts/deploy.js
const { ethers } = require("hardhat");

async function main() {
	const NotificationContract = await ethers.getContractFactory(
		"NotificationContract"
	);
	const notificationContract = await NotificationContract.deploy();

	console.log(
		"NotificationContract deployed to:",
		notificationContract.address
	);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
