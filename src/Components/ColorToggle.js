import React, { useState } from "react"
import PropTypes from "prop-types"

const ColorToggle = (props) => {
    const [cssVars, setCssVars] = useState([{ key: "--color", value: "black" }, { key:"--background-color", value: "white" } ])
    const onClick = () => {
        cssVars.forEach(cssVar => document.documentElement.style.setProperty(cssVar.key, cssVar.value))
        const color = { ...cssVars[0]}
        const bgColor = { ...cssVars[1] }
        const intermediary = color.value
        color.value = bgColor.value
        bgColor.value = intermediary
        setCssVars([color, bgColor])
    }
    return (
        <div className="color-toggle-container">
            <div className="color-toggle">
                <button onClick={onClick}>Toggle Theme</button>

            </div>
        </div>
    )
}

ColorToggle.propTypes = {
    
}

export default ColorToggle
