import React from 'react'
import { Table } from 'react-bootstrap'
interface Props{
    circulating?:string,
    Total?:string,
  
    Max?:string
}
const SupplyDetail:React.FC<Props> = ({circulating,Total,Max}) => {
    return (
        <div className="text-white custom-mt">
            <h3>Bitcoin Supply Detail</h3>
              <Table striped  hover>
                      <tbody className="text-white">
                            <tr className="text-white ">
                            <td className="text-white border-0 py-3	">Circulating Supply</td>
                            <td className="text-white border-0 py-3	">{circulating}</td>
                            </tr>
                            <tr>
                                <td className="text-white border-0 py-3	">Total Supply</td>
                                <td className="text-white border-0 py-3	">
                                   {Total}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-white border-0 py-3	">Max Supply</td>
                                <td className="text-white border-0 py-3	">{Max}</td>
                            </tr>
                        </tbody>
                </Table>
               
        </div>
    )
}

export default SupplyDetail
