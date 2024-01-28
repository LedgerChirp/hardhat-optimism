const { ethers } = require("hardhat");
const sendNotificationToNovu = require("../integration/novuIntegration.js");
const { sendNotification } = require("../utils/sendNotification.js");
const fetchNotification = require("../utils/fetchNotification.js");

async function main() {
  const [deployer] = await ethers.getSigners();
  // Send notification to Novu
  await sendNotificationToNovu(
    deployer.address,
    "Hello from Optimistic Ethereum!"
  );
  await sendNotification("heelo");
  //   await fetchNotification();
  console.log("Notifications sent successfully!");
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
