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

export { Clock, Toggle }
