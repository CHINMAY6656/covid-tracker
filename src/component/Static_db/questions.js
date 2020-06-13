const quizArray = [
  {
    key: 1,
    question: "Are you experiencing any of the following symptoms?",
    options: ["Cough", "Fever", "Difficulty in Breathing", "None of the Above"],
    answerCode: ["1", "1", "1", "0"]
  },
  {
    key: 2,
    question: "Have you ever had any of the following.",
    options: [
      "Diabetes",
      "Hypertension",
      "Lung disease",
      "Heart Disease",
      "None of the Above"
    ],
    answerCode: ["1", "1", "1", "1", "0"]
  },
  {
    key: 3,
    question: "Have you traveled internationally in last 28-45 days?",
    options: ["Yes", "No"],
    answerCode: ["1", "0"]
  },
  {
    key: 4,
    question: "Which one of the following applies to you?",
    options: [
      "I have previously lived with/near COVID-19 positive",
      "I have treated/taked care of/examined a COVID-19 positive with/without protective gear",
      "I am/was a Quarentined or was incharge of a quarentine Centre",
      "None of the Above"
    ],
    answerCode: ["1", "1", "1", "0"]
  }
];

export default quizArray;
