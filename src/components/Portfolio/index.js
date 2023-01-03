import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
        name: 'Sapien-Aesthetic-University',
        subtitle: 'MERN Stack',
        description: 'Sapien Aesthetic University is an online platform for trusted industry skin care professionals to sell educational courses. The courses can be videos, audio, quizzes, or articles. The goal is to provide students short information that makes complicated science easier to understand.',
        link: "https://sau100.herokuapp.com/",
        repo: "https://github.com/zeinabhared/SAU"
    },
    {
        name: 'Books-and-Breweries',
        subtitle: 'Node/Express/Handlebars',
        description: 'This is a website where you can search and save books and breweries in one place! We wanted to create a website where you could find breweries that had good drinks, good snacks and a space where you could enjoy your book or even host a book club!',
        link: "https://bookclub-brewery22.herokuapp.com/",
        repo: "https://github.com/zeinabhared/BooksandBreweries"
    },
    {
        name: 'Smoke-Signal',
        subtitle: 'HTML/CSS/JS',
        description: 'An app where users can search the latest data of recent fire incidents in Seattle using the Google Maps API and the Seattle Real Time Fire Data API.',
        link: "https://zeinabhared.github.io/SmokeSignal/",
        repo: "https://github.com/zeinabhared/SmokeSignal"
    },
    {
        name: 'Note-Taker',
        subtitle: 'Node/Express',
        description: 'This application is used to write and save notes. It uses an Express.js backend and will save and retrieve notes data from a JSON file.',
        link: "https://zay-note-taker.herokuapp.com/",
        repo: "https://github.com/zeinabhared/Note-Taker"
    },
    {
        name: 'Password-Generator',
        subtitle: 'HTML/CSS/JS',
        description: 'This app is a password generator that creates a password with a length of at least 8 characters and no more than 128 characters. The password generator will have the ability to create a password with a combination of lowercase, uppercase, numeric or special characters.',
        link: "https://zeinabhared.github.io/Password-Generator/",
        repo: "https://github.com/zeinabhared/Password-Generator"
    },
    {
        name: 'Tech-Blog',
        subtitle: 'Node/Express/Handlebars',
        description: 'This application was created to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.',
        link: "https://zay-tech-blog.herokuapp.com/",
        repo: "https://github.com/zeinabhared/Tech-Blog"
    },
    {
        name: 'Weather-Dashboard',
        subtitle: 'HTML/CSS/JS',
        description: 'Weather dashboard that retrieves current weather forecast data using the OpenWeather One Call API.',
        link: "https://zeinabhared.github.io/Weather-Dashboard/",
        repo: "https://github.com/zeinabhared/Weather-Dashboard"
    },
    {
        name: 'Code-Quiz',
        subtitle: 'HTML/CSS/JS',
        description: 'This application is a timed coding quiz with multiple-choice questions.',
        link: "https://zeinabhared.github.io/Code-Quiz/",
        repo: "https://github.com/zeinabhared/Code-Quiz"
    },
    {
        name: 'Text-Editor',
        subtitle: 'PWA',
        description: 'This application was created to build a text editor that runs in the browser and meets the PWA criteria. The application will also function offline.',
        link: "https://zay-text-editor.herokuapp.com/",
        repo: "https://github.com"
    },  
    {
        name: 'Basic-Portfolio',
        subtitle: 'HTML/CSS',
        description: 'Sample professional portfolio.',
        link: "https://zeinabhared.github.io/Portfolio/",
        repo: "https://github.com/zeinabhared/Portfolio"
    },
  ]);

  return (
    <div>
      <div>
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
