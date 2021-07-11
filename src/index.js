import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import 'milligram'
import './style.css'
import Clock from './playground/clock.js'
import Toggle from './playground/toggle.js'
import LoginControl from './playground/login.js'
import Calculator from './playground/boiling.js'

ReactDOM.render(
    <div className='wrapper'>
        <nav className='navigation'>
            <section className='container'>
                <span className='navigation-title'>This is title</span>
            </section>
        </nav>
        <div className='container'>
            <Clock />
            <Toggle />
            <LoginControl />
            <Calculator />
        </div>
    </div>,
    document.getElementById('react-root')
)
