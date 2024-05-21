import React, { useState } from 'react';
import libros from './libros.json';

const App = () => {
  const [busqueda, setBusqueda] = useState('');

  const librosFiltrados = libros.filter(libro =>
    libro.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
    libro.autor.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <div className="auth-buttons">
          <button className="register-button">Registrar</button>
          <button className="login-button">Iniciar Sesión</button>
        </div>
        <h1>Leolandia</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Buscar libros..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
      </header>
      <div className="libros-lista">
        {librosFiltrados.map((libro, index) => (
          <div key={index} className="libro">
            <img src={libro.portada} alt={`Portada de ${libro.titulo}`} className="libro-portada" />
            <h2>{libro.titulo}</h2>
            <p>Autor: {libro.autor}</p>
            <a href={libro.enlacePDF} target="_blank" rel="noopener noreferrer" className="descargar-link">Descargar PDF</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
