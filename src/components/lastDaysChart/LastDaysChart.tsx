import React from 'react'
import { Line } from 'react-chartjs-2'

interface Props{
    info:any,
    changePercent:number 
}

const LastDaysChart:React.FC<Props> = ({info,changePercent}) => {
   
    
    
   
        
    const data = canvas =>{
        let gradient;
       if(changePercent < 0){
        const ctx = canvas.getContext("2d")
         gradient = ctx.createLinearGradient(0,0,0,120);
        gradient.addColorStop(0, '#ff0000');
        gradient.addColorStop(0.2, '#ff0000c7');
        gradient.addColorStop(1, 'rgba(255,0,0,0)');
       }
       else{
        const ctx = canvas.getContext("2d")
        gradient = ctx.createLinearGradient(0,0,0,120);
       gradient.addColorStop(0, '#50ff67');
       gradient.addColorStop(0.4, '#44ff3e45');
       gradient.addColorStop(0.5, 'rgba(255,0,0,0)');
       }
         
        return {
            labels:info.map(item=>item[0]),
            datasets:[{
                data:info.map(item=>({'x':item[0],'y':item[1]})), 
                borderColor:changePercent < 0 ?  '#e42222':'#00ff22',
                backgroundColor:gradient,
                fill:true
            }]
        }
      }
   
         const option = {
             scales:{
               
                xAxes:{
                    ticks:{
                        display:false
                    },
                   grid:{
                       display:false
                   }
                },
                yAxes:{
                    ticks:{
                        display:false
                    },
                    grid:{
                        display:false
                    }
                }
             },
             elements: {
                point:{
                    radius: 0
                }
            },
            
             plugins:{
                 legend:{
                     display:false
                 }
             }
         }
    
    return (
        <>
            <div className="mt-4">
                <p className="text-gray-300 mb-0 whitespace-nowrap">Last 7 Days</p>
                <p className={` ${changePercent < 0 ? 'text-red-700':'text-green-700'}`}>{(changePercent*100).toFixed(2)}%</p>
            </div>
            <div className="w-4/6 ml-auto">
                <Line   data={data} options={option}  />
            </div>
        </>
    )
}

export default LastDaysChart
