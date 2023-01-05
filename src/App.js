import React, { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import axios from "axios";
import Coins from "./components/Coins"
import Coin from "./routes/Coin"
// import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Feedback from "./components/Feedback"

function App() {
	const [coins, setCoins] = useState([]);

	const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=50&page=1&sparkline=false";

	useEffect(() => {
    	axios.get(url).then((response) => {
      		setCoins(response.data);
      		console.log(response.data[0]);
    	}).catch((error) => {
      		console.log(error);
    	})
	}, [])

	return (
		<div className="App">
			<Home />
			<Routes>
				<Route path="/" element={<Coins coins={coins} />} />
				<Route path="/coin" element={<Coin />}>
					<Route path=":coinId" element={<Coin />} />
				</Route>
			</Routes>
			{/* <Feedback /> */}
		</div>
	);
}

export default App;
