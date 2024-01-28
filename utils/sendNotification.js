// utils.js
const { ethers } = require("hardhat");
const sendNotificationToNovu = require("../integration/novuIntegration");

async function sendNotification({ NotificationData }) {
  const [deployer] = await ethers.getSigners();
  const NotificationContract = await ethers.getContractFactory(
    "NotificationContract"
  );
  const notificationContract = await NotificationContract.deploy();
  console.log(
    "NotificationContract deployed to:",
    notificationContract.address
  );
  // Send notification to Novu
  await sendNotificationToNovu(deployer.address, NotificationData);

  // Send notification to Optimistic Ethereum
  await notificationContract.sendNotification(NotificationData);

  console.log("Notifications sent successfully!");
}
sendNotification("abcd")
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
module.exports = {
  sendNotification,
};
