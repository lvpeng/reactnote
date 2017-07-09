import React from 'react'
import ReactDOM from 'react-dom'


/*
    Adding Lifecycle Methods to a Class
*/
class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {date: new Date()}
    }

//lifecycle  `componentDidMount` hook: run after the component output has been rendered to the DOM . This is a good place to set up a timer
    componentDidMount () {
        this.timerID = setInterval(
            () => this.tick(),
            1000)
    }

     // lifecycle `componentWillUnMount` hook : In applications with many components, it's very important to free up resources taken by the components when they are destroyed.
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    
    tick(){
        this.setState({
            date: new Date()
        })
    }

/*
    While this.props is set up by React itself and this.state has a special meaning, you are free to add additional fields to the class manually if you need to store `something that is not used for the visual output.`

   " If you don't use something in render(), it shouldn't be in the state."
    
*/
    render(){
        return (
            <div>
                <h1>Hello, clock</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>    
        )
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById("root")
)     


/*
Let's quickly recap what's going on and the order in which the methods are called:

1) When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component. Since Clock needs to display the current time, it initializes this.state with an object including the current time. We will later update this state.

2) React then calls the Clock component's render() method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the Clock's render output.

3) When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle hook. Inside it, the Clock component asks the browser to set up a timer to call tick() once a second.

4) Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time. Thanks to the setState() call, React knows the state has changed, and calls render() method again to learn what should be on the screen. This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.

5) If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle hook so the timer is stopped.
*/

    