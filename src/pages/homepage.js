import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage({ onStartTest }) {
    const [name, setName] = useState(localStorage.getItem("username") ? localStorage.getItem("username") : "");
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        localStorage.setItem("username", e.target.value);
        setName(e.target.value);
    };

    const handleStartTest = () => {
        // Call the onStartTest function and pass the entered name
        if (name.trim() !== "") {
            onStartTest(name);
            navigate("/topics");
        } else {
            alert("Please Enter Your Name to Continue");
        }
    };

    return (
        <div className="home-page-container">
            <h1>Welcome to the Maths Quiz!</h1>
            <p>Please enter your name to begin:</p>
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={handleNameChange}
                className="input-field" // Apply styles to the input field
            />
            <br />
            <button onClick={handleStartTest} className="start-button">
                Start Test
            </button>
        </div>
    );
}

export default HomePage;
