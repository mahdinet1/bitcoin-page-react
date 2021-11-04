import React,{useEffect, useState} from 'react'
import { ButtonGroup, Col, Form, Row, ToggleButton } from 'react-bootstrap'
import { getCustomData, getHistoryData } from '../../../api/crypto';
import Chart from './chart';
import Volume from './Volume';
const times = [ 
    {id:1,name:'Day',value:'day'},
    {id:2,name:'Week',value:'week'},
    {id:3,name:'Mounth',value:'mounth'},
    {id:4,name:'Year',value:'year'},
    {id:5,name:'All',value:'all'},
]
const LineChart:React.FC = () => {
    const [radioValue, setRadioValue] = useState('day');
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [data, setdata] = useState<any>()

    const focusHandler =(event)=>{
        event.target.setAttribute('type','date')
    }
    const blurHandler =(event)=>{
        event.target.setAttribute('type','text')
        
    }
    useEffect(() => {
        (async()=>{
            const res = await getHistoryData(radioValue)
           
            setdata(res)
        })()
        
        return () => {
            
        }
    }, [radioValue])

    useEffect(() => {
        if(endDate && startDate){

            (async()=>{
                const res = await getCustomData(startDate,endDate)
                console.log('custom time',res)
                setdata(res)
                setRadioValue('')
            })()
        }
        return () => {
            
        }
    }, [startDate,endDate])
    if(!data)
    {
        return (<p>loading...</p>)
    }
    return (
        <Row>
            <Col>
            <Row>
                <Col lg={3} className="text-white"><p className="w-min mx-auto whitespace-nowrap text-2xl font-semibold">Bitcoin Charts</p></Col>
                <Col lg={5}>
                    <div className="mx-auto w-min">
                    <ButtonGroup> 
                        {times.map((item,index)=>{
                           return( 
                           <ToggleButton 
                                key={item.id}
                                id={`radio-${item.id}`}
                                type='radio'
                                variant={radioValue === item.value ? 'outline-primary':'outline-secondary'}
                                name="radio"
                                value={item.value}
                                checked={radioValue === item.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                           >
                              {item.name}
                           </ToggleButton>
                           )
                        })}
                    </ButtonGroup>
                    </div>
                </Col>
                <Col lg={4}>
                    <Form className="d-lg-flex">
                        <Form.Label className="text-gray-300 mt-1 mr-1">From</Form.Label>
                        <Form.Control className="mr-3 date-bg " type="text" placeholder="Start Date" onFocus={focusHandler} onBlur={blurHandler} onChange={(e)=>setStartDate(e.target.value)}/>
                        <Form.Label className="text-gray-300 mt-1 mr-1">To</Form.Label>
                        <Form.Control className="date-bg" type="text" placeholder="End Date" onFocus={focusHandler} onBlur={blurHandler} onChange={(e)=>setEndDate(e.target.value)}/>
                    </Form> 
                </Col>
            </Row> 
            <Col>
                <Chart priceInfo={data.prices} marketInfo={data.market_caps} labels={radioValue} /> 
                <Volume volumeData={data.total_volumes} labels={radioValue} /> 
            </Col>
            </Col>
        </Row>
    )
}

export default LineChart
