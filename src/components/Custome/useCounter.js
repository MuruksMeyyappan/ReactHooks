import {useState} from 'react'

function useCounter(initialCount = 0,value) {
    const [count, setCount] = useState(initialCount)

    const incrementCount = () =>{
        setCount(prevCount => prevCount+value)
    }
    const decrementCount = () =>{
        setCount(prevCount => prevCount-value)
    }
    const ResetCount = () =>{
        setCount(initialCount)
    }
    return [count,incrementCount,decrementCount,ResetCount]
}

export default useCounter
