import React from 'react'

function BoilingVerdict (props) {
    if (props.celsius >= 100) {
        return <p>The water wold boil.</p>
    }
    return <p>The water would not boil.</p>
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

function toCelsius (fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit (celsius) {
    return (celsius * 9 / 5) + 32
}

function tryConvert (temperature, convert) {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
        return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
}

class Calculator extends React.Component {
    constructor (props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = { temperature: '', scale: 'c' }
    }

    handleChange (e, scale) {
        this.setState({ temperature: e.target.value, scale: scale })
    }

    render () {
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onChange={this.handleChange} />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onChange={this.handleChange} />
            </div>
        )
    }
}

class TemperatureInput extends React.Component {
    constructor (props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = { temperature: '' }
    }

    handleChange (e) {
        this.props.onChange(e, this.props.scale)
    }

    render () {
        const temperature = this.props.temperature
        const scale = this.props.scale
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        )
    }
}

export default Calculator
