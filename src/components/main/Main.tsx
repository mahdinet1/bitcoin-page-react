import { useState } from "react"
import { Container } from "react-bootstrap"
import ChartPart from "../chartPart/ChartPart"
import CryptoInfoHeader from "../cryptoInfoHeader/CryptoInfoHeader"
import ListItem from "../listItem/ListItem"
import NewsPart from "../NewsPart/NewsPart"



const Main: React.FC = () => {
	const [state, setstate] = useState('chart')
	
	const clickHandler = (event)=>{
	const list = document.getElementById('otherInfo')
	const li = list.querySelectorAll('li')
	Array.from(li).map(item=>item.classList.remove('border-b-2','border-yellow-400'))
 
	const el = event.target
	const part = el.getAttribute('custom-attr')
	if(part==='chart'){
		setstate('chart')
	}
	else{
		setstate('news') 
	}
	el.classList.add('border-b-2','border-yellow-400')
	
	}
	return (
	<main>
		<CryptoInfoHeader />
		<Container className="mt-3 bg-gray-800">
			<ul className="flex text-white border-b-2 border-gray-700" id="otherInfo">
				<ListItem clicked={clickHandler} attr="chart" clas="border-yellow-400 border-b-2"> 
					Chart
				</ListItem>
				<ListItem clicked={clickHandler} attr="news">
					News
				</ListItem>
			</ul>
			{state==='chart' ? <ChartPart />:<NewsPart />}
		</Container>
	</main> 
	)
}

export default Main
