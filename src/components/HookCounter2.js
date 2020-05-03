import React, {useState} from 'react'

function HookCounter2() {
    const initinalCount = 0 
    const [count, setCount] = useState(initinalCount)

    const incrementFive = () => {
        for(let i = 0; i < 5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            count = {count}
            <button onClick={() => setCount(initinalCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive} >Increment by 5</button>
        </div>

    )
}

export default HookCounter2
