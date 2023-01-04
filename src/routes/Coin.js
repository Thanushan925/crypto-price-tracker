import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Coin.css'

const Coin = () => {
    
    const params = useParams();
    const [coin, setCoin] = useState({});
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

    useEffect(() => {
        axios.get(url).then((response) => {
            setCoin(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <div>
            <div className="coin-container">
                <div className="content">
                    <h1>{coin.name}</h1>
                </div>
                <div className="content">
                    <div className="rank">
                        <span className="rank-button">Rank #{coin.market_cap_rank}</span>
                    </div>
                    <div className="info">
                        <div className="coin-heading">
                            {/* <img src={coin.image} /> */}
                            <p>{coin.name}</p>
                            <p>{coin.symbol.toUpperCase()}</p>
                        </div>
                    </div>
                </div>
                <div className="content">
                
                </div>
            </div>
        </div>
    )
}

export default Coin