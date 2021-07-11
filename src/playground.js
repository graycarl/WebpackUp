import React from 'react'

class Clock extends React.Component {
    constructor (props) {
        super(props)
        this.state = { date: new Date() }
    }

    componentDidMount () {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount () {
        clearInterval(this.timerID)
    }

    tick () {
        this.setState({ date: new Date() })
    }

    render () {
        return (
            <div>
                <h1>Hello</h1>
                <h2>This is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

class Toggle extends React.Component {
    constructor (props) {
        super(props)
        this.state = { isToggleOn: false }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (e) {
        e.preventDefault()
        this.setState({ isToggleOn: !this.state.isToggleOn })
    }

    render () {
        return (
            <button onClick={this.handleClick}>
                State: { this.state.isToggleOn ? 'ON' : 'OFF' }
            </button>
        )
    }
}

class LoginControl extends React.Component {
    constructor (props) {
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state = { isLoggedIn: false }
    }

    handleLoginClick () {
        this.setState({ isLoggedIn: true })
    }

    handleLogoutClick () {
        this.setState({ isLoggedIn: false })
    }

    render () {
        const isLoggedIn = this.state.isLoggedIn
        let button
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}

function LoginButton (props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

function LogoutButton (props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

function Greeting (props) {
    const isLoggedIn = props.isLoggedIn
    if (isLoggedIn) {
        return <h1>Welcome back!</h1>
    } else {
        return <h1>Please sign up.</h1>
    }
}

export { Clock, Toggle, LoginControl }
