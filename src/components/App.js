
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [timer,setTimer] = useState(0)
  setInterval(() => {
    setTimer(timer+1)
  },1000)

  return (
    <div>
        {/* Do not remove the main div */}
        <p>You've been on this page for {timer} seconds.</p>
    </div>
  )
}

export default App
