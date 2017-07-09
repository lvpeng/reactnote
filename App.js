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



ReactDOM.render(
    <div>
        <Button />
        <ActionLink />
    </div>,
    document.getElementById('root')
)

/*Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:

- React events are named using `camelCase`, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.*/