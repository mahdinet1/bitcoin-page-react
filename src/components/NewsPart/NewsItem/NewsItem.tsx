import React from 'react'
import { Card, Col } from 'react-bootstrap'
interface Props{
imageUrl?:string,
text?:string,
source?:string
}
const NewsItem:React.FC<Props> = ({imageUrl,text,source}) => {
    return (
        <Col lg={3} md={4} sm={8} xs={12} className="self-stretch cursor-pointer"> 
           <Card style={{minHeight:'100%'}}>
               <Card.Img variant="top" src={imageUrl} />
               <Card.Body> 
               <Card.Text>
                   {text} 
               </Card.Text>
               </Card.Body>
               <Card.Footer>
               <span className="text-yellow-600">{source}</span>
               </Card.Footer>
           </Card> 
        </Col>
    )
} 

export default NewsItem
