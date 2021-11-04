import React,{useEffect, useState} from 'react'
import { getOhlc,getCryptoInfo } from '../../../api/crypto'
import HistoricData from './Historic/HistoricData'
import SupplyDetail from './SupplyDetail/SupplyDetai'
import TodayInfoPart from './TodayInfoPart/InfoPart'
import Yesterday from './yesterdayPart/Yesterday'

const MoreInfo:React.FC = () => {
    const [data, setdata] = useState<any>()
    const [ohlc, setohlc] = useState<any>()
    useEffect(() => {
        (async ()=>{
         const res = await getCryptoInfo('bitcoin')
         setdata(res)
         const res2= await getOhlc()
      
         setohlc(res2)
       
        })()
        
       
 
         
     }, [])
   
     if((!data) || (!ohlc)){
        return <p>loading...</p>
     }
    return ( 
        <>
            <TodayInfoPart volume={ohlc.volume} price={parseFloat(data.market_data.current_price.usd).toFixed(2)} high={data.market_data.high_24h.usd}  low={data.market_data.low_24h.usd} />
            <Yesterday open={ohlc.open.day} change={parseFloat(ohlc.changes.percent.day)} />
            <HistoricData high={parseFloat(ohlc.open.week)} monthHigh={parseFloat(ohlc.open.month)} seasonHigh={parseFloat(ohlc.open.month_3)} yearHigh={parseFloat(ohlc.open.year)} allHigh=" $67,016.5 USD" allLow="$0.0008 USD"  />
            <SupplyDetail circulating="₿18,830,000" Total="$18,862,925" Max="$21,000,000" />
        </>
    )
}

export default MoreInfo
