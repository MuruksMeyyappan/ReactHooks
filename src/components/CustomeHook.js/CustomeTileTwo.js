import React,{useState, useEffect} from 'react'
import useDocumentTitle from '../Custome/useDocumentTitle'

function CustomeTitleTwo() {
    const [count, setCount] = useState(0)
    // useEffect(() => {
    //     document.title= `count ${count}`
      
    // }, [count])
    useDocumentTitle(count)

    return (
        <div>
            <button onClick={()=>{setCount(count + 1)}}>Count - {count}</button>
        </div>
    )
}

export default CustomeTitleTwo
