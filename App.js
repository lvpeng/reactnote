import React from 'react'
import ReactDOM from 'react-dom'


/*
1.create `Components` by function
*/

//accept a single 'props' object argument
// reurn a React element 
function Welcome(props){
    return <h1>Welcome, {props.name}</h1>
}


class App extends React.Component {
    render(){
        return (
            <div>
                <Welcome name="evan" />
                <Welcome name="peng" />
                <Welcome name="fan" />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)