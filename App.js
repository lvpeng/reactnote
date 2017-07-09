import React from 'react'
import ReactDOM from 'react-dom'


/*
    State Updates are Merged
*/
class Article extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            posts : [],
            comments: []
        }
    }

/* When you call setState(), React merges the object you         provide        into the current state.

    The merging is shallow, so this.setState({comments}) leaves this.state.posts intact, but completely replaces this.state.comments.


*/    
    componentDidMount() {
        fetchPosts().then( result  => {
            this.setState({
                posts: result.data.posts
            })
        })
        fetchComments().then( result => {
            this.setState({
                comments: result.data.comments
            })
        })
    }


    fetchPosts(){
        //...
        
    }
    fetchComments(){
        //..
    }

    render(){
        return (
            <div>
                <h1>Article List</h1>
                <ul>
                    {}
                </ul>
            </div>    
        )
    }
}

ReactDOM.render(
    <Article />,
    document.getElementById("root")
)     