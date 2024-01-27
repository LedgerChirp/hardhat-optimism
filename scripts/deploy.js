async function main() {
	// We get the contract to deploy
	const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
	const simpleStorage = await SimpleStorage.deploy(789);
	const SendAndRecieve = await ethers.getContractFactory("SendAndRecieve");
	const sendAndRecieve = await SendAndRecieve.deploy();

	console.log("Deploying contracts");

	// NOTE: All Contracts have an associated address
	console.log("SimpleStorage deployed to:", await simpleStorage.address);
	console.log("SendAndRecieve deployed to:", await sendAndRecieve.address);
	return {
		simpleStorage: await simpleStorage.address,
		sendAndRecieve: await sendAndRecieve.address,
	};
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
