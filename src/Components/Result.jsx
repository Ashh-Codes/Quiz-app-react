import React from 'react'

const Result = ({score,totalScore,tryAgain}) => {
  return (
    <>
    <div className="score">
        Your Score:{score}<br/>
        Total SCore:{totalScore}
        
            
        
    </div>
    <button id='next' onClick={tryAgain}>Try Again</button>
    </>
  )
}

export default Result
