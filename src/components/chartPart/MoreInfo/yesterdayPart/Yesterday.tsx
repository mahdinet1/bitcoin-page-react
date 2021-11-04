import React from 'react'
import { Table } from 'react-bootstrap'
interface Props{
    open?:string,
    high?:string,
    low?:string,
    close?:string,
    change?:number
}
const Yesterday:React.FC<Props> = ({open,high,low,close,change}) => {
    return (
        <div className="text-white custom-mt"> 
            <h3> Yesterday's Bitcoin Price</h3>
              <Table striped  hover>
                      <tbody className="text-white">
                            <tr className="text-white ">
                            <td className="text-white border-0 py-3	">Yesterday's  High/Low</td>
                            <td className="text-white border-0 py-3 	">
                                <p>{high}</p>
                                <p>{low}</p>
                            </td>
                            </tr>
                            <tr>
                                <td className="text-white border-0 py-3	">Yesterday's  Open/Close</td>
                                <td className="text-white border-0 py-3	">
                                    <p>${open} USD</p>
                                    <p>{close}</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-white border-0 py-3	">Yesterday's  change</td>
                                <td className={` border-0 py-3 ${change < 0 ? 'text-danger':'text-success'}`}>{change} %</td>
                            </tr>
                        </tbody>
                </Table>
               
        </div>
    )
}

export default Yesterday
