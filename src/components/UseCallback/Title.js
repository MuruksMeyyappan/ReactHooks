import React from 'react'

function Title() {
    console.log("REnderin title");
    
    return (
        <div>
            <h2>
                Use call back hook
            </h2>
        </div>
    )
}

export default React.memo(Title)
