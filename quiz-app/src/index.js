import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';


// export const questions = [
//   {
//     question: "Що таке JavaScript?",
//     variants: ["Програмна мова для створення стилів", "Мова для програмування на сервері", "Мова програмування для створення динамічних веб-сайтів"],
//     correct: 2
//   },
//   {
//     question: "Яка функція використовується для виведення тексту в консоль?",
//     variants: ["print()", "console.log()", "output()"],
//     correct: 1,
//   },
//   {
//     question: "Як правильно позначити коментар у JavaScript?",
//     variants: ["/* це коментар */", "// це коментар", "<!-- це коментар -->"],
//     correct: 1,
//   },
//   {
//     question: "Яка функція використовується для видалення елемента з масиву?",
//     variants: ["deleteElement()", "removeElement()", "splice()"],
//     correct: 2,
//   },
//   {
//     question: "Яка функція перетворює рядок на ціле число?",
//     variants: ["parseInt()", "toInteger()", "stringToNumber()"],
//     correct: 0,
//   },
//   {
//     question: "Як звернутися до першого елемента масиву?",
//     variants: ["array[0]", "first(array)", "array.first()"],
//     correct: 0,
//   },
//   {
//     question: "Яка ключова конструкція використовується для створення циклу?",
//     variants: ["forLoop()", "loop()", "for()"],
//     correct: 2,
//   },
//   {
//     question: "Який оператор використовується для порівняння значень та типів змінних?",
//     variants: ["==", "===", "equals()"],
//     correct: 1,
//   },
//   {
//     question: "Що таке API?",
//     variants: ["Алгоритмічна програма інтерфейсу", "Апаратний інтерфейс програмування", "Інтерфейс програмування додатків"],
//     correct: 2,
//   }
// ]


  // const quiz_states = {
  //   openQuiz : false,
  //   quizStep : 0,
  //   right : 0,
  //   questions,
  //   openResults : false,
  //   selectedVariant : []
  // }

  // const quiz_reducer =(state = quiz_states, action)=> {
  //   switch(action.type) {
  //     case "OPEN__QUIZ" :
  //       return {...state, openQuiz : !state.openQuiz}

  //     case "NEXT__STEP" :
  //       return {...state, quizStep : state.quizStep +1}

  //     case "RIGHT__VARIANT" :
  //       return {...state, right: state.right +1}

  //     case "OPEN__RESULTS" :
  //       return {...state, openResults : !state.openResults}

  //     case "SELECT__VARIANT" :
  //       return {...state, selectedVariant :[...state.selectedVariant,action.payLoad]}
  //     default :
  //       return state
  //   }
  // }
  
// const store = legacy_createStore(quiz_reducer)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store = {store}>
    <App></App>
   </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
