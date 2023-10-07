import React from "react";
import Navbar from "./navbarpage";

function Results({ score, totalQuestions, restartGame }) {
    return (
        <>
            <Navbar />
            <h1 className="quiztitle">Result Page</h1>
            <div className="final-results">
                <h1>Your Score</h1>
                <h2>
                    {score} out of {totalQuestions} correct - ({(score / totalQuestions) * 100}%)
                </h2>
                <button className="restartButton" onClick={restartGame}>Restart game</button>
            </div>
        </>

    );
}

export default Results;
