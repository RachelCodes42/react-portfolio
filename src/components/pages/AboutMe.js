import React from 'react';
import imgSrc from '../../images/headshot.png'

export default function AboutMe() {
  return (
    <div class='d-flex justify-content-center'>
      <div class='m-3 card w-50'>
        <div class='card-body'>
        <img src={imgSrc} class="card-img-top w-25 rounded mx-auto d-block m-3" alt="Rachel Hochman" />
          <h1 class='text-center'>About Me</h1>
          <p>
            Hello! My name is Rachel Hochman. First, I'd like to say thank you for taking the time to check out my portfolio. This is where you'll find some information about me, the projects I have worked on, links to those projects, and much more. Now for a little bit about me. I'm excited to share my journey as a passionate and solutions-driven full stack web developer. My background in medical/clinical experience has been a pivotal part of my career journey. It's equipped me with the unique ability to leverage strong communication, collaboration, problem-solving, and analytical skills to create innovative solutions. I excel in fast-paced, diverse team environments where innovation is the name of the game. I can't wait to connect with fellow professionals, share insights, and embark on exciting new challenges.
          </p>
        </div>
      </div>
    </div>
  );
}