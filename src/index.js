import React from 'react'
import ReactDOM from 'react-dom'
import * as pg from './playground.js'
import './style.css'

ReactDOM.render(
    // see: https://javascript.info/import-export#import
    <div>
        <pg.Clock />
        <pg.Toggle />
    </div>,
    document.getElementById('react-root')
)
