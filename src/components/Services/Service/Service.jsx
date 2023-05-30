import React from 'react'
import './Service.css'
export default function Service(props) {
    return (
        <div className="service">
            {props.logo}
            <h4 className='Service__title'>{props.title}</h4>
            <p className="service__caption">Lipsum as it is sometimes known is dummy text used in laying out print, graphic or web designs.</p>
        </div>
    )
}
