import React from 'react';

export default function Portfolio() {
  return (
    <div class='d-flex flex-column justify-content-center align-items-center m-3'>
      <h1 class='m-3'>Portfolio</h1>
      <div class='d-flex flex-row flex-wrap justify-content-center col-sm-9'>
        <div class='m-3 card'>
          <div class='card-body text-center m-3'>
            <img class='mb-3' src='public/images/weather.png' alt='test'></img>
            <h3>Moovie Reviews</h3>
            <p><a href='https://rachelcodes42.github.io/weather-forecast-dashboard/'>Live Preview ></a></p>
            <p><a href='https://github.com/RachelCodes42/weather-forecast-dashboard'>GitHub Repo ></a></p>
          </div>
        </div>
        <div class='m-3 card'>
          <div class='card-body text-center m-3'>
            <img class='mb-3' src='public/images/scheduler.png' alt='test'></img>
            <h3>Sportify</h3>
            <p><a href='https://rachelcodes42.github.io/dynamic-hourly-scheduler/'>Live Preview </a></p>
            <p><a href='https://github.com/RachelCodes42/dynamic-hourly-scheduler'>GitHub Repo </a></p>
          </div>
        </div>
        <div class='m-3 card'>
          <div class='card-body text-center m-3'>
            <img class='mb-3' src='public/images/passwordgen.png' alt='test'></img>
            <h3>Weather Dashboard</h3>
            <p><a href='https://rachelcodes42.github.io/password-generator/'>Live Preview ></a></p>
            <p><a href='https://github.com/RachelCodes42/password-generator'>GitHub Repo ></a></p>
          </div>
        </div>
        <div class='m-3 card'>
          <div class='card-body text-center m-3'>
            <img class='mb-3' src='public/images/codequiz.png' alt='test'></img>
            <h3>Daytime Planner</h3>
            <p><a href='https://rachelcodes42.github.io/code-quiz/'>Live Preview ></a></p>
            <p><a href='https://github.com/RachelCodes42/code-quiz'>GitHub Repo ></a></p>
          </div>
        </div>
        <div class='m-3 card'>
          <div class='card-body text-center m-3'>
            <img class='mb-3' src='public/images/healthcare.jpg' alt='test'></img>
            <h3>Project Name</h3>
            <p><a href='https://sccrm-healthcare-bbafb87ca81b.herokuapp.com/home'>Live Preview ></a></p>
            <p><a href='https://github.com/Elrond-Hubbard/Team-SCCRM-2'>GitHub Repo ></a></p>
          </div>
        </div>
        <div class='m-3 card'>
          <div class='card-body text-center m-3'>
            <img class='mb-3' src='public/images/mars.png' alt='test'></img>
            <h3>E-Commerce Backend</h3>
            <p><a href='https://chrisdehaan.github.io/Team-SCCRM/'>Live Preview ></a></p>
            <p><a href='https://github.com/ChrisDeHaan/Team-SCCRM'>GitHub Repo ></a></p>
          </div>
        </div>
        


      </div>
    </div>
  );
}