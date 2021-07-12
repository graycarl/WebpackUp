import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import 'normalize.css'
import 'milligram'
import './style.css'
import PlayGround from './playground/page.js'
import Home from './pages/home/home.js'

ReactDOM.render(
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/playground">PlayGround</Link></li>
            </ul>
        </div>
        <Switch>
            <Route path="/playground"><PlayGround /></Route>
            <Route path="/"><Home/></Route>
        </Switch>
    </Router>,
    document.body
)
