import React from 'react'
import { Table } from 'react-bootstrap'
interface Props{
    price?:string,
    high?:string,
    low?:string,
    volume?:string
}
const TodayInfoPart:React.FC<Props> = ({price,high,low,volume}) => {
    return (
        <div className="text-white mt-4">
            <h3>Bitcoin Price Today</h3>
              <Table striped  hover>
                      <tbody className="text-white">
                            <tr className="text-white ">
                            <td className="text-white border-0 py-3	">price</td>
                            <td className="text-white border-0	">${price} USD</td>
                            </tr>
                            <tr>
                                <td className="text-white border-0	">24 HOUR HIGH/LOW</td>
                                <td className="text-white border-0	">
                                    <p className="mb-0">${high} USD</p>
                                    <p className="mb-0">${low} USD</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-white border-0	">24 Hour Volume</td>
                                <td className="text-white border-0	">{volume}</td>
                            </tr>
                        </tbody>
                </Table>
               
        </div>
    )
}

export default TodayInfoPart
