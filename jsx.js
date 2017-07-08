const elem = <h1>hello,world</h1>


function formatName(user) {
    return user.first + ' ' + user.lastname
}

<MyButton color="blue" shaowSize="2">click me</MyButton>

React.createElement(
    MyButton,
    { color: 'blue', s}
)

React.createElement(
        MyButton,
        { color: 'blue', shadowSize: 2},
        'click me'
    )

//Type

const element = <h1>Hello</h1>  
const element = <div tabIndex="0">{format(user)}</div>
const element = <img src="{user.avatarUrl}"/>

function generator(user){
    if (user) {
        return <div>{format(user)}</div>
    }
    return <div>Hello, Stranger</div>
}
const element = (
    <div>
        
    </div>  
)

ReactDOM.render(
    <h1>Hello. world</h1>,
    document.getElementById('root')
)
