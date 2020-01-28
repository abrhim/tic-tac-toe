import React from "react"
import PropTypes from "prop-types"
import {createContext, useState} from "react"

const GridContext = createContext()

const zeroState = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]]

const GridProvider = ({children}) => {
    const [grid, setGrid] = useState(zeroState)
    const [marker, setMarker] = useState("X")

    const setBox = ({ coordinates:{x,y} }) => {
        const nextState = [...grid]
        if (nextState[x][y] ==="-") {
            nextState[x][y] = marker
            marker === "X" ? setMarker("O") : setMarker("X")
            // _evaluateState(nextState)
            setGrid(nextState)
        }
    }

    // useEffect to watch grid --> evaluate and set Winner and display winner. 
    

    const _evaluateState = nextState => {
        // loop thru nextState
        // all rows === same
        nextState.forEach(el => {
            if (el[0] === el[1] && el[1] === el[2]) {
                // setWinner(el[0])
            }
        })
        // all columns === same

        // nextState.forEach(el => {
        //     const 
        // })
        
            // 
        // check for winning states
            //do math, loop thru with brute force...? check for each possible winning position
        // set winner 
    }

    const context = {
        grid,
        setBox,
    }

    return (
        <GridContext.Provider value={context}>
            {children}
        </GridContext.Provider>
    )
}

GridProvider.propTypes = {
    children: PropTypes.node,
}

export { GridContext, GridProvider }
