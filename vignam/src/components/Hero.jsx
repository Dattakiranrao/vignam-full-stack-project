import React, { useEffect, useState } from 'react'
import Questions from './Questions'

export default function Hero({theory, video, questions}) {
    const [theoryState, setTheoryState] = useState(JSON.parse(localStorage.getItem("theoryState")))
    const [videoState, setVideoState] = useState(JSON.parse(localStorage.getItem("videoState")))
    const [questionState, setQuestionState] = useState(JSON.parse(localStorage.getItem("questionState")))
    const [simulationState, setSimulationState] = useState(JSON.parse(localStorage.getItem("simulationState")))
    const [doubtsState, setDoubtsState] = useState(JSON.parse(localStorage.getItem("doubtsState")))
    console.log(questions)

    useEffect(() => {
        localStorage.setItem("theoryState", JSON.stringify( theoryState ))
        localStorage.setItem("videoState", JSON.stringify(videoState))
        localStorage.setItem("questionState", JSON.stringify(questionState))
        localStorage.setItem("simulationState", JSON.stringify(simulationState))
        localStorage.setItem("doubtsState", JSON.stringify(doubtsState))
    })

    const onTheoryClick = () => {
        setTheoryState(true)
        setVideoState(false)
        setQuestionState(false)
        setSimulationState(false)
        setDoubtsState(false)
    }
    const onVideoClick = () => {
        setTheoryState(false)
        setVideoState(true)
        setQuestionState(false)
        setSimulationState(false)
        setDoubtsState(false)
    }
    const onQuestionClick = () => {
        setTheoryState(false)
        setVideoState(false)
        setQuestionState(true)
        setSimulationState(false)
        setDoubtsState(false)
    }
    const onSimulationClick = () => {
        setTheoryState(false)
        setVideoState(false)
        setQuestionState(false)
        setSimulationState(true)
        setDoubtsState(false)
    }
    const onDoubtsClick = () => {
        setTheoryState(false)
        setVideoState(false)
        setQuestionState(false)
        setSimulationState(false)
        setDoubtsState(true)
    }

  return (
      <>
      <div className='flex w-full justify-between px-8 pt-9 items-center'>
      <button onClick={onTheoryClick} className={theoryState ? `bg-blue-500 font-bold text-xl px-4 py-2 rounded-lg text-white` : `bg-blue-100 font-bold text-xl px-4 py-2 rounded-lg text-blue-500`}>Theory</button>
      <button onClick={onSimulationClick} className={simulationState ? `bg-blue-500 font-bold text-xl px-4 py-2 rounded-lg text-white` : `bg-blue-100 font-bold text-xl px-4 py-2 rounded-lg text-blue-500`}>Simulation</button>
      <button onClick={onDoubtsClick} className={doubtsState ? `bg-blue-500 font-bold text-xl px-4 py-2 rounded-lg text-white` : `bg-blue-100 font-bold text-xl px-4 py-2 rounded-lg text-blue-500`}>Ask Doubts</button>
      <button onClick={onVideoClick} className={videoState ? `bg-blue-500 font-bold text-xl px-4 py-2 rounded-lg text-white` : `bg-blue-100 font-bold text-xl px-4 py-2 rounded-lg text-blue-500`}>Video</button>
      <button onClick={onQuestionClick} className={questionState ? `bg-blue-500 font-bold text-xl px-4 py-2 rounded-lg text-white` : `bg-blue-100 font-bold text-xl px-4 py-2 rounded-lg text-blue-500`}>Questions</button>
      </div>
      {theoryState ? (
      <div className='w-full px-8 pt-9'>{theory[0].theory}</div>
      ): ""}
      {simulationState ? (
      <div className='w-full px-8 pt-9'>Under Development</div>
      ): ""}
      {doubtsState ? (
      <div className='w-full px-8 pt-9'>Under Development</div>
      ): ""}
      {videoState ? (
          <>
          {video.map((v,key) => (
          <iframe className='pt-5' key={key} width="1000" height="315" src={`https://www.youtube.com/embed/${v.link}`} ></iframe>
          ))}

          </>
      ): ""}
      {questionState ? (
          questions.map((q, key) => (
          <Questions questionAndOptions={q} key={key} />
          ))
      ): ""}

      </>
  )
}
