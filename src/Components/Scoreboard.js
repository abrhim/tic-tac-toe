import React, { useContext } from "react"
import PropTypes from "prop-types"
import { GameContext } from "../Contexts/Game"

const Scoreboard = (props) => {
    const {score, resetGame, winner} = useContext(GameContext)
    return (
        <div className="scoreboard">
            <h4>X: {score.X}</h4>
            <h4>O: {score.O}</h4>
        </div>
    )
}

Scoreboard.propTypes = {
    
}

export default Scoreboard
