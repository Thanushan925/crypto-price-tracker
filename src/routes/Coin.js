import React from 'react'
import './Coin.css'
// import { useState, useEffect } from 'react'
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

const Coin = () => {
    // const params = useParams();
    // const [coin, setCoin] = useState({});
    // const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

    // useEffect(() => {
    //     axios.get(url).then((response) => {
    //         setCoin(response.data);
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // }, [])

    return (
        <div>
            <div className="coin-container">
                <div className="content">
                    {/* <h1>{coin.name}</h1> */}
                    <h1>🚧 Under construction due to change in API 🚧</h1>
                </div>
                {/* <div className="content">
                    <div className="rank">
                        <span className="rank-button">Rank #{coin.market_cap_rank}</span>
                    </div>
                    <div className="info">
                        <div className="coin-heading">
                            <img src={coin.image} />
                            <p>{coin.name}</p>
                            <p>{coin.symbol}</p>
                        </div>
                        <div className="coin-price">
                            <h1>{coin.market_data.current_price}</h1>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <table>
                        <thead>
                            <tr>
                                <th>1hr</th>
                                <th>24hr</th>
                                <th>7d</th>
                                <th>14d</th>
                                <th>30d</th>
                                <th>1yr</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{coin.market_data.price_change_percentage_1h_in_currency}</td>
                                <td>{coin.market_data.price_change_percentage_24hr_in_currency}</td>
                                <td>{coin.market_data.price_change_percentage_7d_in_currency}</td>
                                <td>{coin.market_data.price_change_percentage_14d_in_currency}</td>
                                <td>{coin.market_data.price_change_percentage_30d_in_currency}</td>
                                <td>{coin.market_data.price_change_percentage_1yr_in_currency}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="content">
                    <div className="stats">
                        <div className="left">

                        </div>
                        <div className="right">
                            
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Coin