import _ from 'lodash'
import './style.css'
import Icon from './icon.svg'
import Notes from './data.csv'

function component () {
    const element = document.createElement('div')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')

    const myIcon = new Image()
    myIcon.src = Icon

    element.appendChild(myIcon)

    for (const n in Notes) {
        const row = document.createElement('div')
        row.innerHTML = _.join(Notes[n], ' ')
        element.appendChild(row)
    }

    return element
}

document.body.appendChild(component())
