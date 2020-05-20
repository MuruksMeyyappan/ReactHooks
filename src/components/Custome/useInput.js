import {useState} from 'react'

function useInput(initialValue) {
 const [value, setValue] = useState(initialValue)
 const Reset = () =>{
     setValue(initialValue)
 }
 const bind = {
     value : value,
     onChange: e =>{
         setValue(e.target.value)
     }
 }
 return [value,bind,Reset] 
}

export default useInput
