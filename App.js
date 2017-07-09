import React from 'react'
import ReactDOM from 'react-dom'


/*
    Using State Correctly
*/
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = { counter : 0 }
    }
    
    componentDidMount () {
        this.timerID = setInterval(
            () => this.tick(),
            1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    
    tick(){
        /*
            1. Do Not Modify State Directly
                The only place where you can assign this.state is the constructor.
        */
        // Wrong
        // this.state.counter = 1

        /*2. State Updates May Be Asynchronous*/
        // wrong
        // this.setState({
        //     counter: this.state.counter + parseInt(this.props.increment)
        // })
        this.setState((preState, props) => ({
                counter: preState.counter + parseInt(props.increment)
            })
        )
        
    }

/*
   " If you don't use something in render(), it shouldn't be in the state."
    
*/
    render(){
        return (
            <div>
                <h1>Hello, Counter</h1>
                <h2>{this.state.counter}</h2>
            </div>    
        )
    }
}

ReactDOM.render(
    <Counter increment="1" />,
    document.getElementById("root")
)     