import React, {useState, useEffect} from "react";
import "../App.css";

import Axios from "axios";
import {useNavigate} from "react-router-dom"

function Main() {
  const [cryptoList, setCryptoList] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    Axios.get("https://api.coinlore.net/api/tickers/?start=0&limit=25").then((response) => {
      setCryptoList(response.data["data"]);
    });
  }, []);

  return (
    <div>
      <div id="header">
        <h1>Krypto Price Tracker</h1>
      </div>

      <div className="CryptoList">
        {cryptoList.map((coin) => {
            return (
              <div onClick={() => {navigate(`/currency/${coin.id}`)}}>
                <h1>{coin.name} ({coin.symbol})</h1>
                <h1>${(coin.price_usd * 1.29).toFixed(2)} CAD</h1>
              </div>
            )
        })}
      </div>
    </div>
  );
}

export default Main;