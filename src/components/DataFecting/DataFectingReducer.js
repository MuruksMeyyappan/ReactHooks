import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading : true,
    post : {},
    error: ''
}

const reduer = (state, action) =>{
    switch(action.type){
        case 'FETCH_SUCESS':
            return {
                 loading: false,
                 post: action.payload,
                 error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading : false,
                post: action.payload,
                error: 'something went worng'
            }
        default:
            return{
                initialState
            }
    }
}
function DataFectingReducer() {
    const [state, dispatch] = useReducer(reduer , initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            dispatch({type : 'FETCH_SUCESS', payload : response.data})
        })
        .catch(error =>{
            dispatch({type : 'FETCH_ERROR'})
        })
        }, [])
    return (
        <div>
              {state.loading ? 'loading' : state.post.title}
      {state.error ? state.error : null }
        </div>
    )
}

export default DataFectingReducer
