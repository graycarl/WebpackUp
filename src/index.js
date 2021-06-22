import './style.css'

function reactRoot () {
    const element = document.createElement('div')
    element.id = 'react-root'
    return element
}

document.body.appendChild(reactRoot())
