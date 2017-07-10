import React from 'react'
import ReactDOM from 'react-dom'

/*
    Conditional Rendering
*/
function UserGreeting(){
    return <h1>Welcome back</h1>
}
function GuestGreeting(){
    return <h1>Sign up</h1>
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