import React,{useState} from 'react'
import useInput from '../Custome/useInput'

function CustomeInputHooks() {
    // const [firstName, setFirstName] = useState('')
    const [firstName, bindFirstName, resetFirstName]=useInput('')
    // const [lastName, setLastName] = useState('')
    const [lastName, bindLastName, resetLastName]=useInput('')
    const submitHandeler = e =>{
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={submitHandeler}>
                <div>
                <label>First Name</label>
                <input type='text' {...bindFirstName}/>
                </div>
                <div>
                <label>Last Name</label>
                <input type='text' {...bindLastName}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CustomeInputHooks
