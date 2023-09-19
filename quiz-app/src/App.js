import './App.css';
import { Start } from './component/start';
import { Quiz } from './component/quiz';
import { Finish } from './component/finish';
import { useSelector } from 'react-redux';
import { Results } from './component/results';

function App() {
  const questions = useSelector(state => state.questions)
  const step  = useSelector(state => state.quizStep)
  const openQuiz = useSelector(state => state.openQuiz)
  const openResult = useSelector(state => state.openResults)
 
  return (
    <div>         
      {
        openQuiz ? 
        (
          step >= questions.length ? 
          (
            openResult ? 
            <Results></Results>
            :
            <Finish></Finish>    
          )
          :
          <Quiz></Quiz>
         )
         :
        <Start></Start>
      }
    </div>   
  );
}

export default App;
// export default connect(mapStateProps)(App)
