import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import { getNews } from '../../../api/crypto'
import NewsItem from '../NewsItem/NewsItem'

const NewsItems:React.FC = () => {
    const [news, setnews] = useState([])
    useEffect(() => {
        const data = getNews() 
        if(data) 
         setnews(data.slice(0,18))  
   
        
    }, [])
    if(!news){
        return(<p>loading news....</p>) 
    }
    return (
        <Col className="flex flex-wrap justify-around items-stretch gap-3">
        {news.map(item=>{ 
            return <NewsItem text={item.title} imageUrl={item.image_url} source={item.source_name}  />
        })    } 
        </Col>
    )
}

export default NewsItems
