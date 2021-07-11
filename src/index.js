import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import 'milligram'
import * as pg from './playground.js'
import './style.css'

ReactDOM.render(
    <div className='wrapper'>
        <nav className='navigation'>
            <section className='container'>
                <span className='navigation-title'>This is title</span>
            </section>
        </nav>
        <div className='container'>
            <pg.Clock />
            <pg.Toggle />
            <pg.LoginControl />
        </div>
    </div>,
    document.getElementById('react-root')
)
