import React, {useContext} from 'react';
import { GameContext } from "../Contexts/Game"
import Box from './Box'

function Grid() {
    const { grid } = useContext(GameContext)
    return (
        <div className="grid" >
            {grid.map((row, x) => (
                row.map((el, y) => (
                    <Box key={y / (x+1)} coordinates={{ x, y }}/>
                ))
            ))}
        </div>
    )
}


export default Grid



