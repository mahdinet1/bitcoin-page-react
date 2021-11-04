import React from 'react'
interface Props{
    children:unknown,
    clicked:(event)=>void,
    attr?:string,
    clas?:string
}
const ListItem:React.FC<Props> = ({clicked,children,attr,clas}) => {
    return (
        <li onClick={clicked} className={`pr-4 py-2 cursor-pointer ${clas}`} custom-attr={attr}>
            {children}
        </li>
    )
}

export default ListItem
