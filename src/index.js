import _ from 'lodash'
import './style.css'
import Icon from './icon.svg'
import Notes from './data.csv'
import printMe from './print.js'

function helloComponent () {
    const element = document.createElement('div')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')

    const myIcon = new Image()
    myIcon.src = Icon

    element.appendChild(myIcon)
    return element
}

function dataComponent () {
    const element = document.createElement('div')

    const btn = document.createElement('button')
    btn.innerHTML = 'Click me and check the console!'
    btn.onclick = printMe

    element.appendChild(btn)

    for (const n in Notes) {
        const row = document.createElement('div')
        row.innerHTML = _.join(Notes[n], ' ')
        element.appendChild(row)
    }

    return element
}

document.body.appendChild(helloComponent())
document.body.appendChild(dataComponent())
