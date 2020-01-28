import React, { useContext } from 'react';
import { GridContext } from "../Contexts/Grid"

function Box(props) {
    const { grid, setBox } = useContext(GridContext)
    const {coordinates} = props
    const onClick = () => {
        setBox({ coordinates })
    }
    return (
        <div className="box" onClick={onClick} >
            <span>{grid[coordinates.x][coordinates.y]}</span>
        </div>
    )
}


export default Box



