import React from 'react'
import LinkItem from '../LinkItems/LinkItem'
import {BiWorld,BiSearch,BiMessageAltDetail} from 'react-icons/bi'
import { BsCodeSquare } from 'react-icons/bs'
import {TiDocument} from 'react-icons/ti'
const Links:React.FC = () => {
    return (
        <>
            <ul className="lg:pl-8 pl-0">
                <LinkItem title="Website">
                    <BiWorld />
                </LinkItem>
                <LinkItem title="Explore">
                    <BiSearch />
                </LinkItem>
                <LinkItem title="Message Board">
                    <BiMessageAltDetail />
                </LinkItem>
                <LinkItem title="Source Code">
                    <BsCodeSquare />
                </LinkItem>
                <LinkItem title="Technical Documantion">
                    <TiDocument />
                </LinkItem>
            </ul>   
        </>
    )
}

export default Links
