import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage"; // Import your HomePage component
import QuizPage from "./pages/QuizPage"; // Import your QuizPage component
import TopicsPage from "./pages/TopicPage";
import "./App.css";
import RankingList from "./pages/rankingpage";

function App() {
  const [userName, setUserName] = useState("");
  const handleStartTest = (name) => {
    // Add your logic for starting the test here
    setUserName(name);
    console.log(`Starting the test with name: ${name}`);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage onStartTest={handleStartTest} />} />
        <Route path="/topics" element={<TopicsPage />} />
        <Route path="/quiz" element={<QuizPage userName={userName} />} />
        <Route path="/ranking" element={<RankingList />} />
      </Routes>
    </Router>
  );
}


export default App;
