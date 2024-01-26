const { Novu } = require("@novu/node");

const novu = new Novu({
  apiKey: process.env.NOVU_API_KEY,
});

async function sendNotificationToNovu(userAddress, message) {
  try {
    await novu.sendNotification(userAddress, message);
  } catch (error) {
    console.log(error);
  }
}
