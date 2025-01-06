import React, { useState } from 'react';
import './styles/ArcoIzquierdo.css';

function ArcoIzquierdo() {
  const [content, setContent] = useState('¡Hola! Soy [Tu Nombre]. Estudiante de Software apasionado por la tecnología.');

  const handleClick = () => {
    setContent('Me encanta desarrollar proyectos creativos y resolver problemas con código.');
  };

  return (
    <div className="arco-izquierdo" onClick={handleClick}>
      <h2>Información Personal</h2>
      <p>{content}</p>
    </div>
  );
}

export default ArcoIzquierdo;
