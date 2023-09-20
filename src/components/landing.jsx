import '../styles/landing.css';
import { useEffect } from 'react';

const imItems = ["Fullstack.", "Front-end.", "Back-end."];

export default function Landing() {
  useEffect(() => {
    const targetElement = document.getElementById('im-text');
    consoleText(imItems, targetElement);
  }, []);

  return (
    <div className="landing-container">
      <div className="text-container">
        <h1 id='landing'>Humberto García 🖐</h1>
        <h2>
          Im a <span id='im-text' className='im-text'></span><span className='console'>&#95;</span> developer
        </h2>
        <p>Hi, Im Humberto García Arellano. A passionate Junior Developer from Valencia, Spain 📍</p>
        <div className="buttons">
          {/* Agrega más botones aquí */}
        </div>
        <button className="download-button">Download CV</button>
      </div>
      <div className="image-container">
        <img src="./profile_pic.jpeg" alt="Foto de perfil"/>
      </div>
    </div>
  );
}

function consoleText(words, target) {
  let letterCount = 0;
  let wordIndex = 0;
  let x = 1;
  let waiting = false;

  const interval = setInterval(function() {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = '';
      window.setTimeout(function() {
        wordIndex = (wordIndex + 1) % words.length;
        x = 1;
        letterCount += x;
        waiting = false;
      }, 2000);
    } else if (letterCount === words[wordIndex].length && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 2000);
    } else if (waiting === false) {
      target.innerHTML = words[wordIndex].substring(0, letterCount);
      letterCount += x;
    }
  }, 180);

  return () => {
    clearInterval(interval);
  };
}
