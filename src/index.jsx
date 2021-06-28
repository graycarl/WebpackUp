import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

function reactRoot () {
    const element = document.createElement('div')
    element.id = 'react-root'
    return element
}

class ShoppingList extends React.Component {
    render () {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        )
    }
}

document.body.appendChild(reactRoot())
ReactDOM.render(
    <ShoppingList name="Taylor" />,
    document.getElementById('react-root')
)
