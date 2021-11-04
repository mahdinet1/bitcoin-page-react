import React from 'react'
import { Table } from 'react-bootstrap'
interface Props{
    monthHigh?:number,
    monthlow?:string,
    seasonHigh?:number,
    seasonlow?:string,
    yearHigh?:number,
    allHigh?:string,
    yearlow?:string,
    allLow?:string,
    high?:number,
    low?:string,
}
const HistoricData:React.FC<Props> = ({high,low,monthHigh,monthlow,seasonHigh,seasonlow,yearHigh,allHigh,yearlow,allLow}) => {
    return (
        <div className="text-white custom-mt">
            <h3> Historic Bitcoin Price</h3>
              <Table striped  hover>
                      <tbody className="text-white">
                            <tr className="text-white ">
                            <td className="text-white border-0 py-3	">7day High/Low</td>
                            <td className="text-white border-0 py-3 	">
                                <p className="mb-0">${high} USD</p>
                                <p className="mb-0">${(high - high*(0.01)).toFixed(2)} USD</p>
                            </td>
                            </tr>
                            <tr className="text-white ">
                            <td className="text-white border-0 py-3	">30day High/Low</td>
                            <td className="text-white border-0 py-3 	">
                                <p className="mb-0">${monthHigh} USD</p>
                                <p className="mb-0">${(monthHigh - monthHigh*0.01).toFixed(2)} USD</p>
                            </td>
                            </tr>
                            <tr className="text-white ">
                            <td className="text-white border-0 py-3	">90day High/Low</td>
                            <td className="text-white border-0 py-3 	">
                                <p className="mb-0">${seasonHigh} USD</p>
                                <p className="mb-0">${(seasonHigh - seasonHigh*0.01).toFixed(2)} USD</p>
                            </td>
                            </tr>
                            <tr className="text-white ">
                            <td className="text-white border-0 py-3	">52week High/Low</td>
                            <td className="text-white border-0 py-3 	">
                                <p className="mb-0">${yearHigh} USD</p>
                                <p className="mb-0">${(yearHigh- yearHigh*0.1).toFixed(2)} USD</p>
                            </td>
                            </tr>
                            <tr className="text-white ">
                            <td className="text-white border-0 py-3	">All Time High</td>
                            <td className="text-white border-0 py-3 	">
                                {allHigh}
                            </td>
                            </tr>
                            <tr className="text-white ">
                            <td className="text-white border-0 py-3	">All Time Low</td>
                            <td className="text-white border-0 py-3 	">
                                {allLow}
                            </td>
                            </tr>
                            <tr className="text-white ">
                            <td className="text-white border-0 py-3	">Bitcoin Roi</td>
                            <td className="text-success border-0 py-3 	">
                                9000%
                            </td>
                            </tr>
                        </tbody>
                </Table>
               
        </div>
    )
}

export default HistoricData
