const { ethers } = require("hardhat");
const {
  NotificationContract: Contract,
} = require("../contracts/NotificationContract.sol");
const { sendNotificationToNovu } = require("../integration/novuIntegration");

async function main() {
  const [deployer] = await ethers.getSigners();

  const NotificationContract = await ethers.getContractFactory(Contract);
  const notificationContract = await NotificationContract.deploy();

  console.log(
    "NotificationContract deployed to:",
    notificationContract.address
  );

  // Send notification to Novu
  await sendNotificationToNovu(
    deployer.address,
    "Hello from Optimistic Ethereum!"
  );

  // Send notification to Optimistic Ethereum
  await notificationContract.sendNotification(
    "Hello from Optimistic Ethereum!"
  );

  console.log("Notifications sent successfully!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
