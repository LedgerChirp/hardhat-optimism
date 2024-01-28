import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import Authentication from "./components/Authentication";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<header className="navbar">
				<div className="container">
					<div className="logo">Optify</div>
					<Authentication />
				</div>
			</header>
			<App />
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
