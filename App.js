import React from 'react'
import ReactDOM from 'react-dom'
const path = require('path')

/*
formatDate helper
*/
function formatDate(date){
    return date.toLocaleDateString()
}
/*
Avatar Component
*/
function Avatar(props){
    return (
        <div className="Avatar">
            <img src={props.user.avatarUrl} alt={props.user.name}/>
        </div>
    )
}

/*
UserInfo Component
*/
function UserInfo(props){
    return (
            <div className="UserInfo">
                <Avatar user={props.user} />
                <div className="UserInfo-name">
                    {props.user.name}
                </div>
            </div>
        )
}

/*
Comment Component
*/
function Comment(props){
    return (
        <div className="Comment">
            <UserInfo user={props.user}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}


const _comment = {
    user: {
        avatarUrl: path.resolve(__dirname, "static/avatar.jpg"),
        name: "peng"
    },
    text: "learn react , good luck :p",
    date: new Date()
}

ReactDOM.render(
    <Comment 
        user = { _comment.user}
        text= { _comment.text }
        date= { _comment.date }
    />,
    document.getElementById('root')
)