import axios from 'axios'
import { timestampDetect } from '../utils/helper';
import myData from './data.json';
import articleData from './articles.json'
export const getCryptoInfo = (id)=>{
    const options = {
        method: 'GET',
        url: `https://api.coingecko.com/api/v3/coins/${id}?localization=false&community_data=false&developer_data=false&sparkline=true`,
        
      };
      
     return axios.request(options).then(function (response) {
          //console.log(response.data);
          return response.data
      }).catch(function (error) {
          console.error(error);
      });
}
export const lastWeek = (id) =>{
  const to =Math.floor(new Date() / 1000)
  const from = to - (7*24*60*60)
  const option = {
    method:'GET',
    url:`https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=usd&from=${from}&to=${to}`
  }
  return axios.request(option).then(res=>{
    //console.log(res.data)
    return res.data
  }).catch(e=>{
    console.log(e)
  })
}
export const getNews = ()=>{
 return myData.data
}

export const getHistoryData=(time,id='bitcoin')=>{
  const [from,now] = timestampDetect(time)
  const option = {
    method:'GET',
    url:`https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=usd&from=${from}&to=${now}`
  }
  return axios.request(option).then(response=>{
    //console.log(response.data)
    return response.data
  }).catch(e=>console.log(e))
}
export const getCustomData =(t1,t2,id="bitcoin")=>{
  const from = new Date(t1).getTime()
  const to = new Date(t2).getTime()
 // console.log(from,to)
  const option = {
    method:'GET',
    url:`https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=usd&from=${from/1000}&to=${to/1000}`
  }
  return axios.request(option).then(response=>{
    //console.log(response.data)
    return response.data
  }).catch(e=>console.log(e))
}
export const getArticlesData = ()=>{
  return articleData.data
}

export const getOhlc=()=>{
  var options = {
    method: 'GET',
    url: 'https://bitcoinaverage-global-bitcoin-index-v1.p.rapidapi.com/indices/global/ticker/BTCUSD',
    headers: {
      'x-rapidapi-host': 'bitcoinaverage-global-bitcoin-index-v1.p.rapidapi.com',
      'x-rapidapi-key': 'edda163729msh70c61985a7eef3bp1288ecjsn2cf6c0feabbb'
    }
  };
  
  return axios.request(options).then(function (response) {
    //console.log(response.data);
    return response.data
  }).catch(function (error) {
    console.error(error);
  });
}