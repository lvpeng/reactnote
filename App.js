import React from 'react'
import ReactDOM from 'react-dom'

function Clock(props){
    return (
        <div>
            <h1>Hello, world</h1>
            <h2>{ props.date.toLocaleTimeString() }</h2>
        </div>
    )
}

/*
However, it misses a crucial requirement: the fact that the Clock sets up a timer and updates the UI every second "should be an implementation detail of the Clock.""

Ideally we want to write this once and have the Clock update itself:    

To implement this, we need to add "state" to the Clock component.

State is similar to props, but it is private and fully controlled by the component.

We mentioned before that components defined as classes have some additional features. Local state is exactly that: a feature available only to classes.


*/


ReactDOM.render(
    <Clock date={new Date()}/>,
    document.getElementById('root')    
)