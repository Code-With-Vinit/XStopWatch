import { useState,useRef } from 'react'


function App() {

  const [time,setTime] = useState(0);
  const [stopButton,setStopButton] = useState(false);

  const StopwatchRef = useRef(0);
  const IntervalRef = useRef(null); 

  function handleStart(){ 
    if(!stopButton)
    {
      StopwatchRef.current=new Date().getTime()-time;
    IntervalRef.current= setInterval(()=>{
      setTime(new Date().getTime()-StopwatchRef.current);
    },10);
    }
    else
    {
      clearInterval(IntervalRef.current);
    }
    setStopButton(!stopButton);
  }

  function handleReset(){
    clearInterval(IntervalRef.current);
    setTime(0);
    setStopButton(false);
  }
  function formatTime(){

    // const ms = Math.floor((time%1000)/10);
    const s = Math.floor((time/1000)%60);
    const m = Math.floor((time/(1000*60))%60);

    return `${m}:${s.toString().padStart(2, '0')}`;
  }
  

  return (
    <>
      <h1>Stopwatch</h1>

      {<p>Time :  {formatTime()}</p>}
      <br/>
      <button onClick={handleStart}>
        {stopButton ? "Stop" : "Start"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
