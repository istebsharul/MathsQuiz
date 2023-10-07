import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./navbarpage";
import Results from "./Result";
function Quiz({ userName }) {
    // Properties (move these from the App component)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();


    const questions = [
        {
            text: "What is the capital of America?",
            options: [
                { id: 0, text: "New York City", isCorrect: false },
                { id: 1, text: "Boston", isCorrect: false },
                { id: 2, text: "Santa Fe", isCorrect: false },
                { id: 3, text: "Washington DC", isCorrect: true },
            ],
        },
        {
            text: "What year was the Constitution of America written?",
            options: [
                { id: 0, text: "1787", isCorrect: true },
                { id: 1, text: "1776", isCorrect: false },
                { id: 2, text: "1774", isCorrect: false },
                { id: 3, text: "1826", isCorrect: false },
            ],
        },
        {
            text: "Who was the second president of the US?",
            options: [
                { id: 0, text: "John Adams", isCorrect: true },
                { id: 1, text: "Paul Revere", isCorrect: false },
                { id: 2, text: "Thomas Jefferson", isCorrect: false },
                { id: 3, text: "Benjamin Franklin", isCorrect: false },
            ],
        },
        {
            text: "What is the largest state in the US?",
            options: [
                { id: 0, text: "California", isCorrect: false },
                { id: 1, text: "Alaska", isCorrect: true },
                { id: 2, text: "Texas", isCorrect: false },
                { id: 3, text: "Montana", isCorrect: false },
            ],
        },
        {
            text: "Which of the following countries DO NOT border the US?",
            options: [
                { id: 0, text: "Canada", isCorrect: false },
                { id: 1, text: "Russia", isCorrect: true },
                { id: 2, text: "Cuba", isCorrect: true },
                { id: 3, text: "Mexico", isCorrect: false },
            ],
        },
    ];

    // Helper Functions (move these from the App component)
    const optionClicked = (isCorrect) => {
        // Increment the score
        console.log(score);
        if (isCorrect) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < questions.length) {
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
        // ... (same restartGame function)
        setShowResults(false); // Reset showResults state
        setCurrentQuestion(0);
        setScore(0);
        navigate("/");
    };

    // Add a conditional rendering section for results
    if (showResults) {
        return <Results score={score} totalQuestions={questions.length} restartGame={restartGame} />;
        // return (
        //     <div className="final-results">
        //         <h2>Quiz Results</h2>
        //         <p>Your score: {score}</p>
        //         <button onClick={restartGame}>Restart Quiz</button>
        //     </div>
        // );
    }

    // Ensure that the currentQuestion is within the valid range
    if (currentQuestion < 0 || currentQuestion >= questions.length) {
        return (
            <div className="question-card">
                <p>No more questions to display.</p>
            </div>
        );
    }

    // Ensure that the questions array is not empty
    if (questions.length === 0) {
        return (
            <div className="question-card">
                <p>No questions available.</p>
            </div>
        );
    }

    // Access the current question safely
    const currentQuestionData = questions[currentQuestion];

    return (
        <>
            <Navbar />

            <h1 className="quiztitle">Test Portal</h1>

            <div className="question-card">
                <h2 className="score"> {userName} </h2>
                <br />
                <h2 className="score">Score: {score}</h2>
                {/* Current Question */}
                <h2>
                    {currentQuestion + 1} . {currentQuestionData.text}
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
                                {option.text}
                            </li>
                        );
                    })}
                </ul>
                <button onClick={quit}>Quit</button>
            </div >
        </>
    );
}

export default Quiz;
