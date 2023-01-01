import React from 'react'

const CoinItem = (props) => {
    return (
        <div className='coin-row'>
            <p>{props.coins.market_cap_rank}</p>
            <div className="img-symbol">
                <img src={props.coins.image} alt="" />
                <p>{props.coins.symbol}</p>
            </div>
            <p>{props.coins.market_cap_rank}</p>
            <p>{props.coins.price_change_percentage}</p>
            <p className='hide-mobile'>{props.coins.total_volume}</p>
            <p className='hide-mobile'>{props.coins.market_cap}</p>
        </div>
    )
}

export default CoinItem