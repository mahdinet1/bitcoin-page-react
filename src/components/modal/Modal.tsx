import React from 'react'
interface Props{
    children?:any
}

const Modal:React.FC<Props> = ({children}) => {
    return (
        <div  className="h-screen w-half fixed z-40 left-0 top-0 bg-modal transition-all duration-500 an2 ">
            <div className="z-50 w-3/6 h-5/6 text-white py-8">
            {children}
            </div>
        </div>
    )
}

export default Modal
