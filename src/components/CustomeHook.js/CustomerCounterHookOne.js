import React,{useState,useEffect, useContext} from 'react'
import useCounter from '../Custome/useCounter'

function CustomerCounterHookOne() {
    // const [count, setCount] = useState(0)

    // const incrementCount = () =>{
    //     setCount(prevCount => prevCount+1)
    // }
    // const decrementCount = () =>{
    //     setCount(prevCount => prevCount-1)
    // }
    // const ResetCount = () =>{
    //     setCount(0)
    // }
    const [count,incrementCount,decrementCount,ResetCount] = useCounter(0,1)
    return (
        <div>
            Count - {count}
            <button onClick={incrementCount}>increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={ResetCount}>Reset</button>
        </div>
    )
}

export default CustomerCounterHookOne
