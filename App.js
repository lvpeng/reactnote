import React from 'react'
import ReactDOM from 'react-dom'

/*
    Handling Events
*/

// Button Component
function Button(){
    function handleClick(){
      console.log('activateLasers');
    }

    return (
        <div>
            <button onClick={handleClick}>
                Activate Lasers
            </button>
        </div>
    )
}

// ActionLink Component 
function ActionLink(){

    function handleClick(e){
        // Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly.
        e.preventDefault();
        console.log('The link was clicked')
    }

    return (
        <a href="#" onClick={handleClick}>Click Me</a>
    )
}

class Toggle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isToggleOn: false
        }
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render(){
        return (
            // `this.handleClick` , not `handleClick`
            <button onClick={this.handleClick}>{this.state.isToggleOn ? "ON" : "OFF"}</button>
        )
    }
}

ReactDOM.render(
    <div>
        <Button />
        <ActionLink />
        <Toggle />
    </div>,
    document.getElementById('root')
)
/*
    This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.
*/

// This binding is necessary to make `this` work in the callback