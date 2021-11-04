import React from 'react'
import {Row,Col} from 'react-bootstrap'
import {numberWithCommas} from '../../../utils/helper'
interface Props{
    symbol:string,
    price:string,
    base:string,
    percentChange?:any,
}
const Price:React.FC<Props> = ({symbol,price,base,percentChange}) => {
    const cost =parseFloat(price).toFixed(2)
    

    return (
        <>
        <p className="text-gray-400 mt-4 mb-0">price</p>
         <Row className="text-white ">
            <Col xs={12}><span className="text-3xl">{symbol}</span><span className="ml-2 text-3xl font-semibold	">{numberWithCommas(cost)}</span><span className="ml-2 text-gray-200">{base}</span></Col>
         </Row>   
         <div>
             <span className="text-gray-400 font-semibold ">1.00000000 BTC</span>
             <span className={`${percentChange < 0 ? 'text-red-400':'text-green-300' } ml-3 font-semibold`}>{percentChange}%</span>
         </div>
        </>
    )
}

export default Price
