import React from 'react'
import ReactDOM from 'react-dom'

/*
    Conditional Rendering
*/
function LoginButton(props){
    return (
        <button onClick={props.onClick}>Login</button>
    )
}

function LogoutButton(props){
    return (
        <button onClick={props.onClick}>Logout</button>
    )
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn
    if(isLoggedIn){
        return <UserGreeting />
    }
    return <GuestGreeting / >
}


ReactDOM.render(
    <Greeting isLoggedIn={true} />,
    document.getElementById('root')
)

// This example renders a different greeting depending on the value of isLoggedIn prop.