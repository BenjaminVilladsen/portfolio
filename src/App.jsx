import './App.css'
import {Routes, Route, useLocation} from 'react-router-dom'

import { useRef } from 'react'

import HomePage from './pages/home/HomePage'

import moveboksImg from '/moveboks.jpeg'

import ProjectPage from './pages/projectdetails/ProjectDetailsPage'
import portfolioImage from '/this/thisImage.png'

import one from '/mb/1.png'
import two from '/mb/2.png'
import three from '/mb/3.png'
import four from '/mb/4.png'
import five from '/mb/5.png'
import six from '/mb/6.png'
import seven from '/mb/7.png'
import eight from '/mb/8.png'
import nine from '/mb/9.png'



function App() {

  const languages = {

    dart: 
    {
      name: "Dart",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Dart-logo.png",
      color: "#0aacf2"
    },
    flutter: {
      name: "Flutter",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
      color: "#0aacf2"
    },
    react: {
      name: "React.js",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      color: "#075e0f"
    },
    javascript: {
      name: "Javascript",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      color: "#5e4807"
    },
    firebase: {
      name: "Firebase",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      color: "#5e3207"
    },
    tailwind: {
      name: "Tailwind.css",
      color: "#5e3207"
    },

  }


  const location = useLocation();

  let projects = [
    {
        title: "Moveboks app",
        description: "Mobile cross-platform app, developed for Moveboks aps, where users can rent speakers, and emlpoyees can manage bookings.",
        secondDescription: "The project was developed with the dart framework, Flutter. The UI was initially created in Figma, and prototypes were tested to ensure proper usability",
        image: moveboksImg,
        color: "#1560d1",
        url: "/moveboksapp",
        github: "https://github.com/BenjaminVilladsen/Moveboks",
        projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        images: [
          one,
          two,
          three,
          four,
          five,
          six,
          seven,
          eight,
          nine
        ],
        tags: [
          languages.dart,
          languages.flutter,
        ],
    },
    {
        title: "Medical Website",
        description: "Web app developed with React.js tailored for medical organizations, allowing customization of their page whilst maintaining an aesthetic feel.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        color: "#5115d1",
        url: "/medicalwebsite",

        images: [
         
      ],
        tags: [
          languages.react,
          languages.javascript,
          languages.firebase,
        ],
        
    },
    {
        title: "This website",
        description: "This website was developed with React.js, and Tailwind.css. The website is hosted on Firebase and uses emailjs to send emails.",
        secondDescription: "I took some design inspiration from Apple's website. For the different animations i used framer-motion.",
        image: portfolioImage,
        projectLink: "https://benjamin-villadsen.web.app/",
        github: "https://github.com/BenjaminVilladsen/portfolio",
        color: "#5a67d8",
        url: "/this",

        images: [
         
      ],
        tags: [
          languages.react,
          languages.javascript,
          languages.tailwind,
        ],
        
    },
]

  //if url is "/" them redirect to home
  if (location.pathname === "/")
  {
    window.location.href = "/home";
  }

  return (
    <div className="">

     
    <Routes>
    <Route path='/home' element={<HomePage projects={projects} ></HomePage>}/>

      {
        projects.map((project, index) => {
          return <Route key={index} path={project.url} element={<ProjectPage project={project} ></ProjectPage>}></Route>
        })
      }
    
    
    </Routes>
    </div>
  )
}

export default App
