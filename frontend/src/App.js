import React from "react";
import "./App.css";
import { useAuth } from "./context/AuthContext";
import Authentication from "./components/Authentication";
import ProtocolComponent from "./components/ProtocolComponents";
const App = () => {
	const { blockNumber } = useAuth();

	return (
		<div className="layout">
			<header className="navbar">
				<div className="container">
					<div className="logo">Optimisms Protocol Library</div>
					<Authentication />
				</div>
			</header>
			<section className="bg-white">
				<ProtocolComponent />
			</section>
			<footer>
				<div className="container">Block Number &bull; {blockNumber}</div>
			</footer>
		</div>
	);
};

export default App;
