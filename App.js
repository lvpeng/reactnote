import React from 'react'
import ReactDOM from 'react-dom'
import Welcome from './component/Welcome.jsx'

class App extends React.Component {
    render(){
        return(
            <Welcome name="tom" />
        )   
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
