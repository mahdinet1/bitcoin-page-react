import React from 'react'
import LineChart from './lineChart/LineChart'
import { Row,Col } from 'react-bootstrap'
import Articles from './Article/Articles'
import MoreInfo from './MoreInfo/MoreInfo'
const ChartPart:React.FC = () => {
    return (
        <div>
           <LineChart />
           <Row>
               <Col lg={8}>
                   <Articles />
               </Col>
               <Col lg={4}>
                   <MoreInfo /> 
               </Col>
           </Row>
        </div>
    ) 
}

export default ChartPart
