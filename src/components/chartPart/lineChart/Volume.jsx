import React from 'react'
import {Bar} from 'react-chartjs-2'
import { getTimeString } from '../../../utils/helper'
import useWindowSize from '../../../lib/use-window-size'

const Volume = ({volumeData,labels}) => {
    const { width } = useWindowSize()
   
    const data ={
        labels:volumeData.map(item=>getTimeString(item[0],labels)),
        datasets:[{
            label:'Volume(Billion)',
           data:volumeData.map(item=>item[1]/1000000000),
           maxBarThickness:5,
           barThickness: 5,
           backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
        }]
    }
    const option ={
        maintainAspectRatio:width < 640 ? false:true,
        aspectRatio:width < 640 ? 2:6,
        scales:{  
            xAxes:{
                ticks:{
                    display:false
                },
               grid:{
                   display:false
               }
            },
        }
       
}
    
    
    return (
        <div className="md:w-5/6 mx-auto w-full jj">
            <Bar data={data} height={width<640 ? 150:40} options={option}   />
        </div>
    )
}

export default Volume
