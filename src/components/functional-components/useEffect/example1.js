import React, { useEffect, useState } from "react"
import axios from "axios"
// const UseEffectExample=()=>{
//     const[counter,setcounter]=useState(0);
//     useEffect(()=>{
//         console.log();
//     },[counter])
//     const handleIncrement=()=>{
//         setcounter(counter+1)
//     }
//     return(
//         <>
//             <h1>counter----{counter}</h1>
//             <button onClick={handleIncrement}>increment</button>
//         </>
//     )
// }
// export default UseEffectExample
const UseEffectExample=()=>{
    const[count,setcount]=useState(0)
    const[data,setdata]=useState([])
    useEffect(()=>{
        fetchData()
    },[count]);

    const fetchData= async ()=>{
        const result=await axios.get("https://dummyjson.com/products")
        setdata(result.data.products)
    }
    const filteredData = data.filter((item, index) => item.id === count);
    return(
        <>
        <h1>count----{count}</h1>
        <button onClick={()=>setcount(count+1)}>increment</button>
        {
            //  data.length>0
            //      ?
            //data.filter((item, index) => index === count).map(item=><h4 key={item.id}>id:{item.id},title:{item.title},price:{item.price}</h4>)
            // data.slice(0,count).map(item=><h4 key={item.id}>title:{item.title},price:{item.price}</h4>)
            //:
            //null
            filteredData.length > 0
                    ?
                    filteredData.map(item => <h4 key={item.id}>id:{item.id},Title: {item.title}, Price: {item.price}</h4>)
                    :
                    null
        }
        
        </>
    )
}
export default UseEffectExample