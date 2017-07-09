import React from 'react'
import ReactDOM from 'react-dom'

/*
The Data Flows Down
*/
// FormattedDate Child Component
function FormattedDate(props){
    return (
        <h2>{props.date.toLocaleTimeString()}</h2>
    )
}

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick()
            ,1000)    
    }

    componentWillUnmount () {
        clearInterval(this.timerID)
    }
    
    tick(){
        this.setState({
            date: new Date()
        })
    }

    // This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.
    render(){
        return (
            <div>
                <h1>Clock</h1>,
                <FormattedDate date={this.state.date}/>
            </div>
        )
    }
} 

// Each Clock sets up its own timer and updates independently.
function App(){
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)

/*This is commonly called a "top-down" or "unidirectional" data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components "below" them in the tree.*/

/*In React apps, whether a component is stateful or stateless is considered an implementation detail of the component that may change over time. You can use stateless components inside stateful components, and vice versa.*/