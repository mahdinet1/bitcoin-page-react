/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect,useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { getCryptoInfo,lastWeek } from '../../api/crypto'
import LastDaysChart from '../lastDaysChart/LastDaysChart'
import CryptoKind from './CryptoKind/CryptoKind'
import Links from './Links/Links'
import MarketInfo from './marketinfo/MarketInfo'
import Price from './Price/Price'
import SomeInfo from './someInfo/SomeInfo'
const CryptoInfoHeader:React.FC = () => {
    const [data, setdata] = useState<object | any>()  
    const [lastWeekData, setlastWeekData] = useState<any>()
   
    useEffect(() => {
        (async()=>{
            const lastWeekD = await lastWeek('bitcoin')
            setlastWeekData(lastWeekD)
           })()
             
      
    }, [])
    useEffect(() => {
        (async ()=>{
         const res = await getCryptoInfo('bitcoin')
         setdata(res)
        })()
        
       
 
         
     }, [])
    
    if((!data) || (!lastWeekData)){
        return <p>loading...</p>   
    } 
    return (
        <Container className=" mx-auto mt-12 bg-gray-800">
            <Row >
                <Col lg={4} sm={6} className="mt-3">
                    <CryptoKind name={data.id} image={data.image.large} />
                </Col>
                <Col lg={3} sm={6} className="pr-lg-0">
                    <Price percentChange={parseFloat(data.market_data.price_change_percentage_1h_in_currency.usd).toFixed(2)} symbol="$" price={data.market_data.current_price.usd} base="USD" />
                </Col>  
                <Col lg={4} md={12} className="pl-lg-0">
                    <SomeInfo rank={data.coingecko_rank} />
                </Col>

                <Col lg={4} className="mt-lg-0 mt-3">
                    <Links />
                </Col>
                <Col lg={3} md={6} className="mt-lg-4 pt-lg-4 mt-3">
                    <MarketInfo  symbol="USD" sign="$" title="Market cap" price={data.market_data.market_cap.usd}/>
                </Col>
                <Col lg={2} md={6} className="mt-lg-4 pt-lg-4 mt-3">
                    <MarketInfo symbol="USD" sign="$" title="Volume" price={data.market_data.total_volume.usd}/>
                </Col>
                <Col lg={3} md={8} className="flex mt-lg-4 pt-lg-4 mt-3">
                      <LastDaysChart info={lastWeekData.prices} changePercent={parseFloat(data.market_data.price_change_percentage_7d)} />   
                </Col> 
            </Row> 
        </Container>
    )
}

export default CryptoInfoHeader
