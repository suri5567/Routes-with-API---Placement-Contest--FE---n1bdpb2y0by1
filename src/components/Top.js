import React, { useState, useEffect } from 'react';


function Top() {
    const [cryptoArr, setCryptoArr] = useState([]);
    useEffect(()=>{
        fetch('https://api.coinlore.net/api/tickers/')
            .then((res)=>{
                return res.json();
            })
            .then((res)=>{
                // console.log(res.data);
                setCryptoArr(res.data);
            })
    },[])

    return (
        <div className='top-container'>
            <h1>Top 10 Global Crypto Coins</h1>
            <div className='display-container'>
                {   
                    cryptoArr.slice(0,10).map((data)=>{
                        
                        return (
                            <div className='coin-container'>
                                <p className='rank-para'>Rank #{data.rank}</p>
                                <h3 className='coin-symbol'>{data.name}({data.symbol})</h3>
                                <p className='price-para'>Price: {data.price_usd}</p>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Top
