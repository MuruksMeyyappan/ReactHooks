import React from 'react'

function Count({text, count}) {
    console.log(`the rendering is ${text}`);
    
    return (
        <div>
            <h2> the {text} of the person is - {count}</h2>
        </div>
    )
}

export default React.memo(Count)
