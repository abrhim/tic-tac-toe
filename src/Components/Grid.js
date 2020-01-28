import React, {useContext} from 'react';
import '../Styles/Grid.css';
import { GridContext } from "../Contexts/Grid"
import Box from './Box'

function Grid() {
    const { grid } = useContext(GridContext)
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



