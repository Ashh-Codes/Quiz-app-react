import { useState } from 'react'
import { QuizData } from './Data/Data'
import Result from './Components/Result'


import './App.css'

function App() {
  const [result,setResult] = useState(false)
  const [score,setscore] =useState(0)
  const [currentQuestion,setCurrentQuestion]=useState(0)
  const [clickedOption,setClickedOption]=useState(0)
 

  const nextQuestion=()=>{
      updateScore()
      if(currentQuestion<QuizData.length-1){
        setCurrentQuestion(currentQuestion+1)
        setClickedOption(0)
      }
      else{
        setResult(true)
      }
  }
  const updateScore=()=>{
    if(clickedOption===QuizData[currentQuestion].answer){
      setscore(score+1)
    }
  }

  const resetAll=()=>{
    setResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
}
  

  return (
    <>
     <div style={{minHeight:'100vh',width:'100%'}} className="d-flex justify-content-center align-items-center bg-dark">
     <div style={{width:'500px'}} className=' bg-primary rounded p-5  text-center'>
      <h4  className='mb-4 quiz-box'>Quiz App</h4>
      <div className='conatiner  shadow border rounded bg-light p-5'>
        {
        result?
        (
          <Result score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
        ):(
          <>
             <div className="question">
             <span id="question-number">{currentQuestion+1}. </span>
             <span>{QuizData[currentQuestion].question}</span>

             </div>
             <div className="options-list">
             {QuizData[currentQuestion].options.map((option,i)=>(
              <button key={i} className={`option-btn ${clickedOption==i+1?"bg-info text-white":null}`} onClick={()=>setClickedOption(i+1)}>
              {option}
              </button>
             ))}
             </div>
             <button id="next" onClick={nextQuestion}>Next</button>
          </>
        )
      }
      
      </div>
      
      
     </div>
    
     </div>
    </>
  )
}

export default App
