import React from 'react'
import {Badge} from 'react-bootstrap'
interface Props{
    rank:string,
}
const SomeInfo:React.FC<Props> = ({rank}) => {
    return (
        <>
            <div className="mt-4 border-l-2 border-gray-700 pl-2 pr-2 float-left">
                <div className="text-gray-400 ">Rank</div>
                <div>
                <Badge pill bg="primary">
                    Rank {rank}
                </Badge>
                </div>
            </div>
            <div className="mt-4 border-l-2 border-gray-700 pl-2 pr-1 float-left">
                <div className="text-gray-400">Helath</div>
                <div className="text-white">Attractive</div>
            </div>
            <div className="mt-4 border-l-2 border-gray-700 pl-2 pr-1 float-left">
                <div className="text-gray-400">sentiment</div>
                <div className="text-white">Attractive</div>
            </div>
        </>
    )
}

export default SomeInfo

