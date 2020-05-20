import React,{ useState, useEffect,useRef } from "react"


function HookTimer() {
    const intervalref = useRef()
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        intervalref.current = setInterval(() => {
            setTimer(pervTimer => pervTimer +1)
        }, 1000);
        return () => {
            clearInterval(intervalref.current)
        }
    }, [])
    return (
        <div>
            timeer - {timer}
            <button onClick={()=> clearInterval(intervalref.current)}>Clear timer</button>
        </div>
    )
}

export default HookTimer
