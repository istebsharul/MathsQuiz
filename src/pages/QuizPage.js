import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./navbarpage";
import Results from "./Result";
import axios from "axios";

function Quiz({ userName }) {
    // Properties (move these from the App component)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();
    const [data, setData] = useState([]);


    useEffect(() => {
        const apiUrl = "http://127.0.0.1:5000/api/generate-fraction-problems";
        axios.get(apiUrl).then((response) => {
            console.log(response.data.questions);
            setData(response.data.questions);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    // console.log(data[0]);
    // Helper Functions (move these from the App component)
    const optionClicked = (isCorrect) => {
        // Increment the score
        console.log(score);
        if (isCorrect) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < data.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true); // Show results when all questions are answered
        }
        console.log("Score:", score);
    };

    const restartGame = () => {
        // ... (same restartGame function)
        setShowResults(false); // Reset showResults state
        setCurrentQuestion(0);
        setScore(0);
    };

    const quit = () => {
        // (same restartGame function)
        setShowResults(false); // Reset showResults state
        setCurrentQuestion(0);
        setScore(0);
        // localStorage.removeItem("username");
        navigate("/topics");
    };


    // Add a conditional rendering section for results
    if (showResults) {
        return <Results score={score} totalQuestions={data.length} restartGame={restartGame} />;
    }

    // console.log(data.length)
    // console.log(currentQuestion)


    // Ensure that the questions array is not empty
    if (data.length === 0) {
        return (
            <div className="question-card">
                <p>No questions available.</p>
            </div>
        );
    }

    // Access the current question safely
    const currentQuestionData = data[currentQuestion];

    if (!currentQuestionData || !currentQuestionData.options) {
        return (
            <>
                <Navbar />
                <h1 className="score">Not Available!!!</h1>
                <div className="question-card">
                    <p>Invalid question data.</p>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />

            <h1 className="quiztitle">Test Portal</h1>

            <div className="question-card">
                {/* Timer */}
                <div className="timer">
                    {/* <p>Time left: {timer} seconds</p> */}
                </div>

                <h2 className="score"> {localStorage.getItem("username") ? localStorage.getItem("username") : ""} </h2>
                {/* {console.log("userName: ", userName)}; */}
                <br />
                <h2 className="score">Score: {score}</h2>
                {/* Current Question */}
                <h2>
                    {currentQuestion + 1} . {currentQuestionData?.text}
                </h2>
                {/* <h3 className="question-text"></h3> */}

                {/* List of possible answers */}
                <ul>
                    {currentQuestionData.options.map((option) => {
                        return (
                            <li
                                key={option.id}
                                onClick={() => optionClicked(option.isCorrect)}
                            >
                                {option?.text}
                            </li>
                        );
                    })}
                </ul>
                {/* <button onClick={startTimer}>Start Timer</button> */}
                <button onClick={quit}>Quit</button>
            </div >
        </>
    );
}

export default Quiz;
