import React, { createContext, useContext, useState } from "react";
import { ethers } from "ethers";

// Create a context
const AuthContext = createContext();

// Create a context provider component
export const AuthProvider = ({ children }) => {
	const [provider, setProvider] = useState();
	const [account, setAccount] = useState("");
	const [balance, setBalance] = useState("");
	const [connected, setConnected] = useState(false);
	const [blockNumber, setBlockNumber] = useState("0");

	const ConnectEth = () => {
		if (typeof window.ethereum !== "undefined") {
			const provider = new ethers.providers.Web3Provider(window.ethereum);

			// Set initial authentication details
			const setInitialAuthDetails = async () => {
				try {
					const accounts = await window.ethereum.request({
						method: "eth_accounts",
					});

					if (accounts.length > 0) {
						setAccount(accounts[0]);
						const balance = await provider.getBalance(accounts[0]);
						setBalance(ethers.utils.formatEther(balance));
						setConnected(true);
					}
				} catch (error) {
					console.error("Error setting initial authentication details:", error);
				}
			};

			setInitialAuthDetails();
			setProvider(provider);
		}
	};

	// Create a context value object
	const contextValue = {
		provider,
		account,
		balance,
		connected,
		setAccount,
		setBalance,
		setConnected,
		setProvider,
		ConnectEth,
		blockNumber,
		setBlockNumber,
	};

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};

// Create a custom hook to use the AuthContext
export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
