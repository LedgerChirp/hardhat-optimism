const { ethers } = require("ethers");

async function fetchEventLogs({ contractAddress }) {
  // Replace with your contract address
  const contractAddress = contractAddress;

  // Replace with your contract ABI
  const contractABI = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "string",
          name: "message",
          type: "string",
        },
      ],
      name: "NotificationSent",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "message",
          type: "string",
        },
      ],
      name: "sendNotification",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ]; // ABI of your contract

  // Connect to an Ethereum node
  const provider = new ethers.providers.JsonRpcProvider(
    "https://sepolia.optimism.io"
  );

  // Create a contract instance
  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  // Specify the event name
  const eventName = "NotificationSent";

  // Get the event filter
  const eventFilter = contract.filters[eventName]();

  // Fetch logs for the specified event filter
  const logs = await provider.getLogs(eventFilter);

  // Process the logs
  logs.forEach((log) => {
    const parsedLog = contract.interface.parseLog(log);
    console.log("Event Data:", parsedLog.values);
  });
}
