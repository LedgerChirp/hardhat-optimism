import React from "react";
import "./App.css";
import { useAuth } from "./context/AuthContext";
import ProtocolComponent from "./components/ProtocolComponents";
const App = () => {
	const { blockNumber } = useAuth();

	return (
		<div className="layout">
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
