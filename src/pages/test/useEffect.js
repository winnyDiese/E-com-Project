
import { useEffect, useState } from "react"

const useEffectFunc = ()=>{
    const [count, setCount] = useState(0)
    const [calculation,setCalculation] = useState(0)
    const mult =1

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount(count=>count+1)
    //     }, 1000)
    // },[count])

    useEffect(()=>{
        setCalculation(calculation => calculation + mult)
        // return ()=> clearTimeout(timer)
    },[count])

    return <div>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(c=>c+1)} >+</button>
        <p>calculation : {calculation}</p>
    </div>
}

export default useEffectFunc

