import React from 'react'
import CoinItem from './CoinItem'

const Coins = (props) => {
    return (
        <div className='container'>
            <div className="heading">
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24hr</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Mrkt Cap</p>
            </div>

            {props.coins.map(coins => {
                return (
                    <CoinItem coins={coins} key={coins.id} />
                )
            })}
        </div>
    )
}

export default Coins;