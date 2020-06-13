import React, { useState } from "react";
import quizArray from "./Static_db/questions";

export default function Test() {
  const answerArray = [];
  let optionList = [];
  let i = 0;
  let jerm = false;
  const [testQuestion, setQuestion] = useState();

  function getResult() {
    let sum = answerArray.reduce((a, b) => {
      return a + b;
    }, 0);
    sum = sum / answerArray.length;
    sum = Math.floor(sum);
    let userStatus, typeAnswer, label;
    if (sum === 0 && jerm === false) {
      userStatus = "safe";
      typeAnswer = "green";
      label = [
        <div key='0'>
        <label htmlFor="safe" key='0'>
          You're safe and none of the traits specify your vulnerability from
          COVID-19.{" "}
        </label>
        </div>
      ];
    } else if (sum === 1) {
      userStatus = "Unsafe-Critical";
      typeAnswer = "red";
      label = (
        <div key='1'>
        <label htmlFor="unsafe" key='1'>
          You're not Safe and may have COVID-19 as suggested by your answers.{" "}
          <br /> Please contact a certified Organisation and Quarentine
          Yourself.
        </label>
        </div>
      );
    } else if (sum === 0 && jerm === true) {
      userStatus = "Unsafe-Vulnerable";
      typeAnswer = "orange";
      label = (
        <div key='2'>
        <label htmlFor="uncertain" key='2' >
          You look overall to be safe from COVID-19 . <br /> But some of your
          traits look vulnerable to COVID-19. <br /> Contact a certified
          practioner and get yourself checked.
        </label>
        </div>
      );
    }
    setQuestion(
      <div className={userStatus}>
        <h3 className={typeAnswer}>{userStatus}</h3>
        {label}
        
      </div>
    );
  }

  function handleClick(event) {
    answerArray.push(parseInt(quizArray[i].answerCode[event.target.name]));
    if (parseInt(quizArray[i].answerCode[event.target.name]) === 1) {
      jerm = true;
    }
    i += 1;
    if (i === quizArray.length) {
      getResult();
    } else {
      startQuiz();
    }
  }

  function startQuiz() {
    optionList = [];
    for (let j = 0; j < quizArray[i].options.length; j++) {
      const element = String(quizArray[i].options[j]);

      optionList.push(
        <input
          className="input-btn btn btn-primary"
          type="button"
          key={5 + j}
          name={j}
          value={element}
          onClick={handleClick}
        />
      );
    }
    setQuestion([
      <div key={"div" + i}>
        <label key={"lbl" + i} htmlFor={quizArray[i].question}>
          {quizArray[i].question}
        </label>
        {optionList}
      </div>
    ]);
  }

  return (
    <div className="test">
      <button className="btn btn-primary"  key={"btn" + i} onClick={startQuiz}>
        Take Covid-19 Quiz
      </button>
      {testQuestion}
    </div>
  );
}
