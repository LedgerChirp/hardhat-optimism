const { Novu } = require("@novu/node");
// require("dotenv").config();
const novu = new Novu("ad5a1735290be23b39976998282670a1");

async function sendNotificationToNovu(userAddress, message) {
  console.log(userAddress);
  // Create a subscriber
  const subscriberId = "mohit-aasirwal"; // Replace this with a unique user ID that matches your database.
  const identificationData = {
    email: "mohitaasirwal@gmail.com", // optional
    data: { message }, // optional
  };
  await novu.subscribers.identify(subscriberId, identificationData);
  const notificationWorkflowId = "novu-web3";
  const payload = {
    to: {
      subscriberId: "in-app-sandbox-subscriber-id-123",
    },
    payload: {
      message: message,
    },
  };
  try {
    novu.trigger(notificationWorkflowId, payload);
    console.log("deployed successfully");
    // await novu.trigger("novu-sms-GBFhUtUi_b", {
    //   to: {
    //     subscriberId: userAddress,
    //     email: "test@email.com",
    //     firstName: "John",
    //     lastName: "Doe",
    //   },
    //   payload: {
    //     message: message,
    //   },
    // });
    // await novu.createNotification({
    //   recipient: userAddress,
    //   message,
    // }); // Use createNotification instead of sendNotification
  } catch (error) {
    console.log(error);
  }
}
module.exports = sendNotificationToNovu;
