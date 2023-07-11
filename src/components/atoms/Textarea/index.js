import React from 'react'
import './input.scss'

const Textarea = ({label, ...rest}) => {
    return (
        <div className="input-wrapper">
            <p className="label">{label}</p>
            <textarea className="input" {...rest} />
        </div> 
    )
}

export default Textarea
