// deployContract.js
const { ethers } = require("hardhat");

async function deployContract() {
  const NotificationContract = await ethers.getContractFactory(
    "NotificationContract"
  );
  const notificationContract = await NotificationContract.deploy();
  console.log(
    "NotificationContract deployed to:",
    notificationContract.address
  );
  return notificationContract;
}

module.exports = deployContract;
