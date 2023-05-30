import React from 'react'
import './Title.css'
export default function Title({ children }) {
    return (
        <div className="section-head">
            <h3 className="section-head-title">{children[0]}</h3>
            <p className="section-head-caption">{children[1]}</p>
            <span className="section-head-line"></span>
        </div>
    )
}
