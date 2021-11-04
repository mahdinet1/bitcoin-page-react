import React from 'react'
interface Props{
    title:string,
    text:string
}
const ArticleItem:React.FC<Props> = ({title,text}) => {
    return (
        <div className="text-white px-4 mt-4">
           <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2> 
           <p className="mt-1 text-justify text-gray-300">{text}</p>
        </div>
    )
}

export default ArticleItem
