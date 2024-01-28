const { Novu } = require("@novu/node");

async function getNotifications(userId, options = {}) {
  try {
    const novu = new Novu(process.env.NOVU_API_KEY); // Get API key from environment
    const notifications = await novu.getNotifications({
      recipient: userId,
      ...options, // Additional options for filtering, sorting, etc.
    });
    return notifications;
  } catch (error) {
    console.error("Error fetching notifications:", error);
    // Handle error gracefully (e.g., throw custom error, return empty array)
  }
}

module.exports = getNotifications;
