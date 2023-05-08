import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Home />
			<Footer />
		</React.Fragment>
	);
}

export default App;
