import React, { useEffect } from "react"
import PropTypes from "prop-types"
import {createContext, useState} from "react"

const GameContext = createContext()

const initState = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]]

const GameProvider = ({children}) => {
    const [grid, setGrid] = useState(initState)
    const [marker, setMarker] = useState("X")
    const [winner, setWinner] = useState()
    const [score, setScore] = useState({X:0, O:0})

    const setBox = ({ coordinates:{x,y} }) => {
        const nextState = [...grid]
        if (nextState[x][y] ==="-" && !winner) {
            nextState[x][y] = marker
            marker === "X" ? setMarker("O") : setMarker("X")
            setGrid(nextState)
        }
    }
    
    const resetGame = () => {
        setWinner(undefined)
        // not sure why but when i used initState it wouldn't set it as anything
        setGrid([["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]])
    }
    useEffect(() => {
        if (winner) {
            const newScore = { ...score }
            newScore[winner] += 1
            setScore(newScore)
        }
    }, [winner])


    useEffect(() => {
        _evaluateGrid(grid)
    }, [grid])

    const _evaluateGrid = gridToCheck => {
        // all rows === same
        gridToCheck.forEach((row,i) => {
            const horizontal0 = row[0]
            const horizontal1 = row[1]
            const horizontal2 = row[2]
            if (horizontal0 !== "-" && horizontal0 === horizontal1 && horizontal1 === horizontal2) {
                setWinner(horizontal0)
            }
        })

        // all columns === same
        for (let i = 0; i < 3; i++){
            const column0 = gridToCheck[0][i] 
            const column1 = gridToCheck[1][i] 
            const column2 = gridToCheck[2][i] 
            if (column0 !== "-" && column0 === column1 && column1 === column2) {
                setWinner(column0)
            }
        }

        // top left to bottom right
        let diag0 = gridToCheck[0][0]
        let diag1 = gridToCheck[1][1]
        let diag2 = gridToCheck[2][2]
        if (diag0 !== "-" && diag0 === diag1 && diag1 === diag2 ) {
            setWinner(diag0)
        }

        // top right to bottom left
        let antiDiag0 = gridToCheck[0][2]
        let antiDiag1 = gridToCheck[1][1]
        let antiDiag2 = gridToCheck[2][0]

        if (antiDiag0 !== "-" && antiDiag0 === antiDiag1 && antiDiag1 === antiDiag2) {
            setWinner(antiDiag0)
        }

       
    }

    const context = {
        grid,
        winner,
        score,
        setBox,
        resetGame
    }

    return (
        <GameContext.Provider value={context}>
            {children}
        </GameContext.Provider>
    )
}

GameProvider.propTypes = {
    children: PropTypes.node,
}

export { GameContext, GameProvider }
