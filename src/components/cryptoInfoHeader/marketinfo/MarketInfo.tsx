import React from 'react'
import {numberWithCommas} from '../../../utils/helper'
interface Props{
    title:string,
    price?:string,
    sign:string,
    symbol:string
}

const MarketInfo:React.FC<Props> = ({title,price,sign,symbol}) => {
    return (
        <>
           <div  className="text-gray-400">{title}</div>
           <div className="text-white font-semibold">
               <span>{sign}</span><span>{numberWithCommas(price)}</span><span className="ml-1">{symbol}</span>
           </div>
           <div className="text-gray-400"></div> 
        </>
    )
}

export default MarketInfo
