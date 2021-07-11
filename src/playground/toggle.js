import React from 'react'

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

export default Toggle
