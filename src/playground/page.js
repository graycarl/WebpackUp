import React from 'react'
import Clock from './clock.js'
import Toggle from './toggle.js'
import LoginControl from './login.js'
import Calculator from './boiling.js'

function PlayGround (props) {
    return (
        <div className='container'>
            <Clock />
            <Toggle />
            <LoginControl />
            <Calculator />
        </div>
    )
}

export default PlayGround
