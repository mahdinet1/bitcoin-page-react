import React from 'react'
import {Row,Col,Image} from 'react-bootstrap'
interface Props{
    name:string,
    image?:any,
}
const CryptoKind:React.FC<Props> = ({name,image}) => {
    return (
        <Row>
            <Col xs={4}>
                <Image src={image} className=" mx-auto"  rounded/>
            </Col>
            <Col xs={8} className="flex items-center p-0">
               <p className="text-3xl text-white capitalize">{name}</p>
            </Col>
       </Row>
    )
}

export default CryptoKind
