import React from 'react'
import './Button.css'
export default function Button({ children, color, mgCenter }) {
    return (
        <a href="#" className="app-btn" style={{ backgroundColor: color, boxShadow: ` 0 1.5rem 4rem ${color} `, margin: mgCenter }} >
            {children}
        </a>
    )
}
