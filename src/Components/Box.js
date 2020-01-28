import React, { useContext } from 'react';
import { GameContext } from "../Contexts/Game"

function Box(props) {
    const { grid, setBox } = useContext(GameContext)
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



