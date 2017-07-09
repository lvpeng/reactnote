import React from 'react'
import ReactDOM from 'react-dom'

//Adding Local State to a Class
class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state = { date: new Date() }
    }
    render(){
        return (
            <div>
                <h1>Hello, Clock</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
)