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

/*
2. create `Components` with ES6 class 
*/
class Hey extends React.Component {
    render(){
        return <h1>Hey, { this.props.name }</h1>
    }
}


ReactDOM.render(
    <div>
        <Welcome name="evan" />
        <Hey name="peng"/>,
    </div>,
    document.getElementById('root')
)