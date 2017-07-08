import React from 'react'
import ReactDOM from 'react-dom'

function tick(){
    const element = (
        <div>
            <h1>Hello, React</h1>
            <h2>{`now time:  ${ new Date().toLocaleString()}` }</h2>
        </div>
        
    )

    ReactDOM.render(
        element,
        document.getElementById('root')
    )

}

setInterval(tick, 1000)




