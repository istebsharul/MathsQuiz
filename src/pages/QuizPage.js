import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./navbarpage";
import Results from "./Result";
function Quiz({ userName }) {
    // Properties (move these from the App component)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        // Define the API URL
        const apiUrl = "http://localhost:8000/questions"; // Replace with your API URL

        // Make a GET request to the API using the fetch function
        fetch(apiUrl)
            .then((response) => response.json()) // Parse the response as JSON
            .then((apiData) => {
                // Update the state variable with the fetched data
                setData(apiData);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

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
        // ... (same restartGame function)
        setShowResults(false); // Reset showResults state
        setCurrentQuestion(0);
        setScore(0);
        navigate("/");
    };

    // Add a conditional rendering section for results
    if (showResults) {
        return <Results score={score} totalQuestions={data.length} restartGame={restartGame} />;
        // return (
        //     <div className="final-results">
        //         <h2>Quiz Results</h2>
        //         <p>Your score: {score}</p>
        //         <button onClick={restartGame}>Restart Quiz</button>
        //     </div>
        // );
    }
    console.log(data.length)
    // console.log(data.length)
    console.log(currentQuestion)

    // Ensure that the currentQuestion is within the valid range
    if (currentQuestion < 0 || currentQuestion >= data.length) {
        return (
            <div className="question-card">
                <p>No more questions to display.</p>
            </div>
        );
    }

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
