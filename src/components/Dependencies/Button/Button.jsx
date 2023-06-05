import React from 'react'
import './Button.css'
export default function Button({children}) {
    return (
        <a href="#" className="app-btn">
            {children}
        </a>
    )
}
