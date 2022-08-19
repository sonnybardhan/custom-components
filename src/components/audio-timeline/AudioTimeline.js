import './AudioTimeline.css';
import React, { useState, useRef, useEffect } from 'react';

const AudioTimeline = () => {
  const progressRef = useRef();
  const progressBarRef = useRef();
  const [progress, setProgress] = useState(0);
  const [inProgress, setInProgress] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      if (
        e.target === progressBarRef.current ||
        e.target === progressBarRef.current.firstChild
      ) {
        console.log('clicked on progress bar');
        console.log(e.clientX);
        console.log(progressBarRef.current.getBoundingClientRect());

        let positionInBox =
          e.clientX -
          progressBarRef.current.firstChild.getBoundingClientRect().left;

        // console.log(progressBarRef.current.getBoundingClientRect().width);

        const newSetting =
          (positionInBox /
            progressBarRef.current.getBoundingClientRect().width) *
          100;
        console.log(newSetting);
        setProgress(newSetting);
      }
    };

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    play();
    return () => {
      clearTimer();
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      clearTimer();
    }
  }, [progress]);

  function play() {
    setInProgress(true);
    progressRef.current = setInterval(() => {
      setProgress((previousProgress) =>
        previousProgress + 1 > 100 ? 100 : previousProgress + 1
      );
    }, 100);
  }

  function clearTimer() {
    setInProgress(false);
    clearInterval(progressRef.current);
  }

  function handleClickPlay() {
    if (inProgress) {
      console.log('In play ... ');
      return;
    }
    play();
  }

  function handleClickPause() {
    clearTimer();
  }

  function handleClickStop() {
    clearTimer();
    setProgress(0);
  }

  return (
    <div className='audio-timeline-container'>
      <div className='progress-container' ref={progressBarRef}>
        <div className='progress-meter' style={{ width: progress + '%' }}></div>
      </div>
      <div className='btn-container'>
        <button className='play-btn' onClick={handleClickPlay}>
          ▶
        </button>
        <button className='pause-btn' onClick={handleClickPause}>
          ⏸
        </button>
        <button className='pause-btn' onClick={handleClickStop}>
          ⏹
        </button>
      </div>
    </div>
  );
};

export default AudioTimeline;
