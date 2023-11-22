import React from 'react';
import imgSrc from '../../images/weather.png';
import img2Src from '../../images/scheduler.png';
import img3Src from '../../images/passwordgen.png';
import img4Src from '../../images/codequiz.png';
import img5Src from '../../images/mars.png';



export default function Portfolio() {
  return (
    <div class='d-flex flex-column justify-content-center align-items-center m-3'>
      <h1 class='m-3'>Portfolio</h1>
      <div class='d-flex flex-row flex-wrap justify-content-center col-sm-9'>
        <div class='m-3 card'>
          <div class='card-body text-center m-3'>
            <img class='mb-3' src={imgSrc} alt='test' width={300}></img>
            <h3>Weather Forecaster</h3>
            <p><a href='https://rachelcodes42.github.io/weather-forecast-dashboard/'>Live Preview </a></p>
            <p><a href='https://github.com/RachelCodes42/weather-forecast-dashboard'>GitHub Repo </a></p>
          </div>
        </div>
        <div class='m-3 card'>
          <div class='card-body text-center m-3'>
            <img class='mb-3' src={img2Src} alt='test' width={300}></img>
            <h3>Scheduler</h3>
            <p><a href='https://rachelcodes42.github.io/dynamic-hourly-scheduler/'>Live Preview </a></p>
            <p><a href='https://github.com/RachelCodes42/dynamic-hourly-scheduler'>GitHub Repo </a></p>
          </div>
        </div>
        <div class='m-3 card'>
          <div class='card-body text-center m-3'>
            <img class='mb-3' src={img3Src} alt='test' width={300}></img>
            <h3>Password Generator</h3>
            <p><a href='https://rachelcodes42.github.io/password-generator/'>Live Preview </a></p>
            <p><a href='https://github.com/RachelCodes42/password-generator'>GitHub Repo </a></p>
          </div>
        </div>
        <div class='m-3 card'>
          <div class='card-body text-center m-3'>
            <img class='mb-3' src={img4Src} alt='test' width={300}></img>
            <h3>Code Quiz</h3>
            <p><a href='https://rachelcodes42.github.io/code-quiz/'>Live Preview </a></p>
            <p><a href='https://github.com/RachelCodes42/code-quiz'>GitHub Repo </a></p>
          </div>
        </div>
        <div class='m-3 card'>
          <div class='card-body text-center m-3'>
            <img class='mb-3' src={img5Src} alt='test'width={300}></img>
            <h3>Mars</h3>
            <p><a href='https://chrisdehaan.github.io/Team-SCCRM/'>Live Preview </a></p>
            <p><a href='https://github.com/ChrisDeHaan/Team-SCCRM'>GitHub Repo </a></p>
          </div>
        </div>



      </div>
    </div>
  );
}