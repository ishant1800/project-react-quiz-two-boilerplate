import React, { useState } from "react";
import "../App.css";
import quizData from "./quizQuestion.json";

const QuizComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const previous = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const next = () => {
    if (currentQuestionIndex === quizData.length - 1) {
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const quit = () => {
    const confirmQuit = window.confirm("Are you sure you want to quit the game?");
    if (confirmQuit) {
      alert("You quit the game");
      setCurrentQuestionIndex(0);
    }
  };

  const currentQuestion = quizData[currentQuestionIndex];
  const isFinalQuestion = currentQuestionIndex === quizData.length - 1;
  const buttonText = isFinalQuestion ? "Reset" : "Next";

  return (
    <div id="rect">
      <div id="ques">
        <h1>Question</h1>
        <p className="question">{`Question ${currentQuestionIndex + 1} of ${quizData.length}`}</p>
        <p className="text">{currentQuestion.question}</p>
        <div id="choice">
          <div id="opt1">{currentQuestion.optionA}</div>
          <div id="opt2">{currentQuestion.optionB}</div>
          <div id="opt3">{currentQuestion.optionC}</div>
          <div id="opt4">{currentQuestion.optionD}</div>
        </div>
        <div>
          <button id="previous" onClick={previous}>Previous</button>
          <button id="next" onClick={next}>{buttonText}</button>
          <button id="quit" onClick={quit}>Quit</button>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
