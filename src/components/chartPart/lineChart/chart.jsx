import React from 'react'
import { Line } from 'react-chartjs-2'
import useWindowSize from '../../../lib/use-window-size'
import { getTimeString } from '../../../utils/helper'





const Chart = ({priceInfo,marketInfo,labels}) => {
    const { width } = useWindowSize()
   
    const data ={
        labels:priceInfo.map(item=>getTimeString(item[0],labels)),
        datasets:[{
            label:'Price($)',
            data:priceInfo,
            borderColor:'#0E6EFD',
            fill:true, 
            yAxisID: 'y',
        },{
            label:'Market Cap(Billion)',
            data:marketInfo.map(item=>item[1]/1000000000),
            borderColor:'#b53dc0',
            yAxisID: 'y1',
            fill:true
        }]
    }
    
    const option = {
      
        maintainAspectRatio:width < 640 ? false:true,
        aspectRatio:width < 640 ? 1:2,
        scales:{
            
            
            x:{
                ticks:{
                    display:width < 640 ? false:true
                },
                grid:{
                    display:false
                }
            },
            y:{
                ticks:{
                    display:width < 640 ? false:true
                },
                display:true,
                position: 'left',
                title:{
                    display:width < 640 ? false:true,
                    text:'-Price',
                    color:'#0E6EFD',
                   font:{
                       size:30,
                       lineHeight:1.5
                   }
                },
                
            },
            y1:{
                ticks:{
                    display:width < 640 ? false:true
                },
                display:true,
                position: 'right',
                title:{
                    display:width < 640 ? false:true,
                    text:'-Market Cap',
                    color:'#b53dc0',
                    font:{
                        size:25
                    }
                },
                grid: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                  },
            }
        }
        
    }
    return (
        <div className="chart-container jj" >
           
              <Line   data={data} options={option}   /> 
        </div>
    )
}

export default Chart
