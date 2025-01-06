import React, { useState, useEffect } from 'react';
import './styles/Cancha.css';

function Cancha() {
  const [playerPosition, setPlayerPosition] = useState({ x: 50, y: 50 });
  const [ballPosition, setBallPosition] = useState({ x: 50, y: 55 });
  const [content, setContent] = useState('¡Bienvenido a mi portafolio interactivo!');
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    // Mostrar el modal y luego ocultarlo después de 5 segundos
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 5000);
    
    return () => clearTimeout(timer); // Limpiar el timer cuando el componente se desmonte
  }, []);

  const handleKeyDown = (e) => {
    let { x, y } = playerPosition;

    switch (e.key) {
      case 'ArrowUp':
        y = Math.max(0, y - 3); // Mover arriba
        break;
      case 'ArrowDown':
        y = Math.min(95, y + 3); // Mover abajo
        break;
      case 'ArrowLeft':
        x = Math.max(0, x - 3); // Mover izquierda
        break;
      case 'ArrowRight':
        x = Math.min(97, x + 3); // Mover derecha
        break;
      case ' ':
        kickBall(x, y);
        break;
      default:
        break;
    }

    setPlayerPosition({ x, y });
  };

  const kickBall = (playerX, playerY) => {
    const distance = Math.sqrt(
      Math.pow(playerX - ballPosition.x, 2) + Math.pow(playerY - ballPosition.y, 2)
    );

    if (distance < 8) {
      const deltaX = ballPosition.x - playerX;
      const deltaY = ballPosition.y - playerY;

      const magnitude = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const normalizedX = deltaX / magnitude;
      const normalizedY = deltaY / magnitude;

      const newBallPosition = {
        x: ballPosition.x + normalizedX * 10,
        y: ballPosition.y + normalizedY * 10,
      };

      setBallPosition({
        x: Math.max(5, Math.min(95, newBallPosition.x)),
        y: Math.max(0, Math.min(90, newBallPosition.y)),
      });

      handleGoal(newBallPosition.x, newBallPosition.y);
    }
  };

  const handleGoal = (ballX, ballY) => {
    let newContent = '';

    if (ballX > 90 && ballY > 40 && ballY < 60) {
      newContent = (
        <div>
          <h2>¡Gol:</h2>
          <p>Algunos Proyectos</p>
          <ul>
            <li>
              <a href="https://github.com/AndresT1710/Proyecto-Web" target="_blank" rel="noopener noreferrer">
                Proyecto-Web
              </a>
            </li>
            <li>
              <a href="https://github.com/AndresT1710/JIRA" target="_blank" rel="noopener noreferrer">
                Jira
              </a>
            </li>
            <li>
              <a href="https://github.com/AndresT1710/Aerolinea" target="_blank" rel="noopener noreferrer">
                Aerolinea
              </a>
            </li>
          </ul>
        </div>
      );
      setBallPosition({ x: 50, y: 50 });
    } else if (ballX < 10 && ballY > 40 && ballY < 60) {
      newContent = (
        <div>
          <h2>¡Gol:</h2>
          <p>Soy un estudiante de Ingeniería en Software con un gran interés en el desarrollo Frontend. Desde joven, la tecnología ha sido mi pasión, lo que me llevó a adentrarme en el mundo de la programación. A lo largo de mi formación</p>
          <p>He trabajado con tecnologías como:</p>
          <ul>
            <li>
              <strong>Frontend: </strong> 
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" alt="Logo de Angular" style={{ width: '30px', marginRight: '10px' }} />
              <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="Logo de React" style={{ width: '30px', marginRight: '10px' }} />
            </li>
            <li>
              <strong>Backend y Base de Datos: </strong>
              <img src="https://ih1.redbubble.net/image.729313648.3636/st,small,507x507-pad,600x600,f8f8f8.u3.jpg" alt="Logo de Node.js" style={{ width: '50px', marginRight: '40px' }} />
              <img src="https://static.vecteezy.com/system/resources/previews/017/067/475/non_2x/sql-file-icon-line-isolated-on-white-background-black-flat-thin-icon-on-modern-outline-style-linear-symbol-and-editable-stroke-simple-and-pixel-perfect-stroke-illustration-vector.jpg" alt="Logo de SQL" style={{ width: '50px', marginRight: '40px' }} />
              <img src="https://webimages.mongodb.com/_com_assets/cms/mongodb-62alj83hm0.png?auto=format%2Ccompress" alt="Logo de MongoDB" style={{ width: '60px', marginRight: '60px' }} />
            </li>
          </ul>
        </div>
      );
      setBallPosition({ x: 50, y: 50 });

    }

    if (ballY <= 5) {
      newContent = (
        <div>
          <h2>¡Saque Lateral!</h2>
          <p>Mis certificaciones:</p>
          <ul>
            <li>
              <a href="https://skillshop.exceedlms.com/student/award/cDdP2k3kv7JfE1B4ANuZemPw" target="_blank" rel="noopener noreferrer">
              Cloud Computing (Google)
              </a>
            </li>
            <li>
              <a href="https://skillshop.exceedlms.com/student/award/8Lpj2vvbsAVDqrAnkccRHhtw" target="_blank" rel="noopener noreferrer">
              Curso de introducción al desarrollo web: HTML y CSS (1/2)  (Google)
              </a>
            </li>
          </ul>
        </div>
      );
      // Restablecer la posición de la pelota
      setBallPosition({ x: 50, y: 50 });
    }

    setContent(newContent);

    const contentElement = document.querySelector('.content');
    contentElement.classList.add('visible');

    setTimeout(() => {
      contentElement.classList.remove('visible');
    }, 30000);
  };

  return (
    <div
      className="cancha"
      tabIndex="0"
      onKeyDown={handleKeyDown}
    >
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Bienvenido a mi portafolio</h2>
            <p>Mi nombre es Andrés Tacuamán. </p>
            <p>Puedes ver algunos de mis proyectos en:</p>
            <ul>
              <li>
                <a href="https://github.com/AndresT1710" target="_blank" rel="noopener noreferrer">
                  GitHub.
                  <p> </p>
                </a>
                <a href="https://www.linkedin.com/in/andr%C3%A9s-tacuam%C3%A1n-24a155345/" target="_blank" rel="noopener noreferrer">
                  Linkedin.
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="arc-left" />
      <div className="arc-right" />
      <div
        className="player"
        style={{
          left: `${playerPosition.x}%`,
          top: `${playerPosition.y}%`,
        }}
      />
      <div
        className="ball"
        style={{
          left: `${ballPosition.x}%`,
          top: `${ballPosition.y}%`,
        }}
      />
      <div className="content">
        <h2>{content}</h2>
      </div>
    </div>
  );
}

export default Cancha;
