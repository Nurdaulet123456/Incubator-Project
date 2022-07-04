// TODO: CSS
import "../../index.css";
import "./Game.css";

// TODO: import othre files
import { useState, useEffect } from "react";
import TimerClock from "../times/Timer";
import StopWatchClock from "../times/Stop.Watch";
import CollectModals from '../childrenModalsWindow/CollectModals'


// let interval;

const Game = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [resultOpen, setResultOpen] = useState(false);
  const [timerOpen, setTimerOpen] = useState(false);


  useEffect(() => {
    setOpen(true);
  }, []);

  const hangleOpenTimerBlock = () => {
    setOpen(true);
    setTimerOpen(false);
  };

  const hangleOpenStopWatchTimerBlock = () => {
    setTimerOpen(true);
    setOpen(false);
  };
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="game">
            <div className="timer">
              <button onClick={hangleOpenTimerBlock}>
                <h1 className="timer__title timer__btn">Timer</h1>
              </button>
            </div>

            <div className="stop__watch">
              <button onClick={hangleOpenStopWatchTimerBlock}>
                <h1 className="stop__watch-title">StopWatch</h1>
              </button>
            </div>
          </div>
          <TimerClock isOpen={open} />
          <StopWatchClock timerIsOpen={timerOpen} />
        </div>
      </div>


    <CollectModals 
    open={resultOpen} 
    close={setResultOpen}
    resultOpen={isOpen}
    setResultOpen={setIsOpen}/>
    </>
  );
};

export default Game;
