import React from 'react'
import ReactDOM from 'react-dom'

//Converting a Function to a Class
class Clock extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello, world</h1>
                <h2>{this.props.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

/*
Clock is now defined as a class rather than a function.

This lets us use additional features such as local state and lifecycle hooks.
*/