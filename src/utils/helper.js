export const numberWithCommas = (x)=>{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export const  timestampDetect = (time='Day')=>{
    const now =Math.floor(new Date() / 1000)
    let from
    switch (time) {
        case 'day':
            from = now - (1*24*60*60)     
            break;
        case 'week':
            from = now - (7*24*60*60)
           break;
        case 'mounth':
            from = now -(30*24*60*60)
            break;
        case 'year':
            from = now - (365*24*60*60)
            break;
        case 'all':
            from = now - (365*24*60*60)
            break;
        default:
            break;
    }
    return [from,now]
}
export function getTimeString(date,label) {
    var a = new Date(date * 1000);
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var s = new Date(date).toLocaleDateString("en-US")
    switch (label) {
        case 'day':
            return `${hour}:${min}:${sec}`;
            
    
        default:
            return s
            
    }
  
   
  }