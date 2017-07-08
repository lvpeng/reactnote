import React from 'react'
import ReactDOM from 'react-dom'

function formatDate(date){
    return date.toLocaleDateString()
}

function Comment(props){
    return (
        <div className="Comment">
            <div className="Avatar">
                <img src="{props.author.avatarUrl} alt={props.author.name}" /> 
            </div>
            <div className="UserInfo-name">
                {props.author.name}
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}

const comment = {
    author : {
        name: "peng",
        avatarUrl: "https://avatars0.githubusercontent.com/u/3367684?v=3&u=2c69d764df01d58fab1c89d94a8f24c37ff0f654&s=400",
    },
    text: "滴滴顺风车的司机真不靠谱唉",
    date: new Date()
}

ReactDOM.render(
    <Comment 
        author= {comment.author}
        text= {comment.text}
        date= { comment.date }
    />,
    document.getElementById('root')
)