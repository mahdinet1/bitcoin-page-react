import React, { useState,useEffect } from 'react'
import ArticleItem from './ArticleItem/ArticleItem'
import { getArticlesData } from '../../../api/crypto'
const Articles:React.FC = () => {
    const [data, setdata] = useState<any>([])
   
    useEffect(() => {
        const res = getArticlesData()
        
        setdata(res)
        return () => {
            
        }
    }, [])
    if(!data){
        return <p>loading....</p>
    }
    return ( 
        <>
             {data.map(item=>{
                return  <ArticleItem title={item.title} text={item.text} key={item.id} />
            })} 
           
        </>
    )
}

export default Articles
