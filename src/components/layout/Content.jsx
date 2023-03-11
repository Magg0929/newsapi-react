import React from 'react'
import '../../App.css'

const Content = ({ children }) => {
    return (
        <div className="main-content landing-overlay">
            {children}
        </div>
    )
}

export default Content