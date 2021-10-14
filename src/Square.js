import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Square() {
    return (
        <div>
            <FontAwesomeIcon style = {{fontSize: '2.5em'}} icon={faCoffee} />
            <p>Tekst</p>
        </div>
    )
}

export default Square
