import React from 'react'
import './Restaurant.css'

export default function Restaurant(props) {
    return (
        <div className='restaurant'>
            <h2>{props.name}</h2>
            <h4>{props.address}</h4>
            <div className='restaurant--row'>
                <h4>{props.price}</h4>
                <h4>{props.rating}</h4>
                <h4>{props.cuisine}</h4>
            </div>
        </div>
    )
}