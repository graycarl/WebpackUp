import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './style.css'

class ShoppingList extends React.Component {
    static get propTypes () {
        return {
            name: PropTypes.string
        }
    }

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

ReactDOM.render(
    <ShoppingList name="Taylor" />,
    document.getElementById('react-root')
)
