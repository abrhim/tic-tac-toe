import React, { useContext } from "react"
// import PropTypes from "prop-types"
import { GameContext } from "../Contexts/Game"

const AnnouncementBoard = (props) => {
    const { winner, resetGame, catsGame } = useContext(GameContext)
    return (
        <div className="announcementboard">
            {winner
                ? (<>
                        <span>Winner is {winner}! </span>
                        <br />
                        <button onClick={resetGame}>Reset Game</button>
                    </>)
                : null}
            {catsGame
                ? (
                    <>
                        <span>Cat's game 🤪</span>
                        <br />
                        <button onClick={resetGame}>Reset Game</button>
                    </>
                )
                : null   }
        </div>
    )
}

// ScorePane.propTypes = {
    
// }

export default AnnouncementBoard
