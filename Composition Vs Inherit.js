// using props.children Demo
function FancyBorder(props) {
    return
    <div className={"FancyBorder FancyBorder-" + props.color} >
        {props.children}
    </div>
}

function Dialog() {
    return
    <FancyBorder>
        <h1 className='Dialog-title'>Welcome</h1>
        <p className='Dialog-message'>World Peace</p>
    </FancyBorder>
}

// using 


function SplitPanel(props) {
    return
    <div className="SplitPanel">
        <div className="SplitPanel-left">{props.left}</div>
        <div className="SplitPanel-right">{props.right}</div>
    </div>
}

function Concat() {
    return <div className="Concat" />;
}

function Chat() {
    return <div className="Chat" />;
}

function App() {
    return (
        <SplitPanel
            left={
                <Concat />
            }
            right={
                <Chat />}
        />
    )
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)

// Specialization 

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">{props.message}</p>
        </FancyBorder>
    );
}

function WelcomeDialig() {
    return (
        <Dialog title="Welcome" message="Wish World Peace" />
    );
}

function App() {
    reurn(
        <WelcomeDialig />
    );
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);

//Composition works equally well for components defined as classes:
class SignUpDialog extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleChange.bind(this);
        this.state = { login: '' };
    }

    render() {
        return (
            <Dialog title="Mar Exploration Program" message="Wish World Peace">
                <input value={this.state.login} onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>Sign Up</button>
            </Dialog>
        );

        handleChange(e){
            this.setState({ login: e.target.value })
        }

        handleSignUp(e){
            alter(`Welcom, ${this.state.login} !`);
        }
    }
}

/*Fancyborder.js*/
import './Fancyborder.css'
function Fancyborder(props) {
    return (
        <div className={'Fancyborder, Fancyborder-' + props.color}>
            {props.children}
        </div>
    );
}

/**
 * Dialog.js
 */

function Dialog(props){
    return (
        <Fancyborder color="blue">
            <h1 className="Dialog-title">{ props.title }</h1>
            <p className="Dialog-message">{ props.message }</p>
        </Fancyborder>
    );
}

class SignUpDialog extends React.Component{
    constructor(props){
        super(props);
        this.state = { 'login': ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    render(){
        return (
            <Dialog title="SignUp" messge="hello, alien">
                <input value="{this.state.login}" onChange="{this.handleChange}"/>
                <button onClick="{this.handleSignUp}">Sign up</button>
            </Dialog>
        );
    }

    handleChange(e){
        this.setState({ login : e.target.value})
    }

    handleSignUp(){
        alter(`Welcome, ${this.state.login}`)
    }
}

ReactDom.render(
    <SignUpDialog />,
    document.getElementById('root')
);