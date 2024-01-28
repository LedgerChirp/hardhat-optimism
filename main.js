const { ethers } = require("hardhat");
const sendNotificationToNovu = require("./integration/novuIntegration");
const deployContract = require("./deployContract");
const sendNotification = require("./utils/sendNotification");
const fetchNotification = require("./utils/fetchNotification");

module.exports = { sendNotification, fetchNotification };
