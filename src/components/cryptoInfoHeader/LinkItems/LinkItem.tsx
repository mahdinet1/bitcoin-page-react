import React from 'react'
import { Nav } from 'react-bootstrap'
import {BsArrowRight} from 'react-icons/bs'
interface Props{
    title?:string,
    children?:any
}
const LinkItem:React.FC<Props> = ({title,children}) => {
    return (
        <li>
           <Nav.Link className="px-0 text-white ">
                <div className="flex">
                     <span  className="pl-2 mt-1 ">{children}</span><span className="pl-2 text-gray-300 hover:text-yellow-300 text-base">{title}</span><span className="pl-2 mt-1 text-primary "><BsArrowRight /></span>
                </div>
            </Nav.Link>
        </li>
    )
}

export default LinkItem
