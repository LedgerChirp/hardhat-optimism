import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useAuth } from "../context/AuthContext";
const Authentication = () => {
	const {
		provider,
		account,
		balance,
		connected,
		setConnected,
		setAccount,
		setBalance,
		ConnectEth,
		setBlockNumber,
	} = useAuth();
	const [gasPrice, setGasPrice] = useState("0");
	useEffect(() => {
		if (provider) {
			const setBlockchainData = async () => {
				setBlockNumber(await provider.getBlockNumber());
				const gasPrice = await provider.getGasPrice();
				setGasPrice(Math.trunc(ethers.utils.formatUnits(gasPrice, "gwei")));
			};

			setBlockchainData();

			// Listen for account changes
			window.ethereum.on("accountsChanged", (accounts) => {
				if (accounts.length > 0) {
					accountHandler(accounts[0]);
					setConnected(true);
				} else {
					setConnected(false);
				}
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const accountHandler = async (account) => {
		try {
			setAccount(account);
			const balance = await provider.getBalance(account);
			setBalance(ethers.utils.formatEther(balance));
		} catch (error) {
			console.log(error);
		}
	};

	const logoutHandler = async () => {
		try {
			await window.ethereum.request({ method: "eth_requestAccounts" });
			setConnected(false);
			setAccount("");
			setBalance("");
		} catch (error) {
			console.error("Error logging out:", error);
		}
	};

	const connectHandler = async () => {
		try {
			ConnectEth();
			await provider.send("eth_requestAccounts", []);
			const accountList = await provider.listAccounts();
			accountHandler(accountList[0]);
			setConnected(true);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			{connected ? (
				<div>
					<label>{`${Number.parseFloat(balance).toPrecision(4)} ETH`}</label>
					<button className="account-button" onClick={connectHandler}>
						{account.substring(0, 6)}...
						{account.substring(account.length - 4)}
					</button>
					<button className="account-button" onClick={logoutHandler}>
						Logout
					</button>
				</div>
			) : (
				<button
					type="button"
					onClick={connectHandler}
					className="rounded-full bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Auth With Optimism
				</button>
			)}
		</>
	);
};

export default Authentication;
