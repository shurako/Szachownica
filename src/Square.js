import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Square() {


    const squareStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 10,
        overflow: 'hidden',
        width: '20%',
        height: '20%',
    
    }

    return (
        <div style = {squareStyle} className="square" >
            <FontAwesomeIcon style = {{fontSize: '2.5em'}} icon={faCoffee} />
            <p>Tekst</p>
        </div>
    )
}

export default Square
