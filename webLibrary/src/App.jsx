import React, { useState } from 'react';
import libros from './libros.json';
import logo from './img/Leolandia.png'; 
import fondo from './img/fondo.png';
import './App.css';

const App = () => {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todos');

  const categorias = ["Todos", "Ficción", "Infantil", "Ciencia Ficción", "Fantasía", "Misterio", "Romance"];

  const librosFiltrados = libros.filter(libro => 
    (libro.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
    libro.autor.toLowerCase().includes(busqueda.toLowerCase())) &&
    (categoria === "Todos" || libro.categoria === categoria)
  );

  let categoriaTitulo = '';
  if (categoria !== 'Todos') {
    categoriaTitulo = categoria;
  }

  return (
    <section className="app">
      <section className='allApp'>
        <header className="header">
          <section className="auth-buttons">
            <button className="register-button">Registrar</button>
            <button className="login-button">Iniciar Sesión</button>
          </section>

          <img src={logo} alt="Leolandia Logo" className="app-logo" /> 
          
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Buscar libros..." 
            value={busqueda} 
            onChange={e => setBusqueda(e.target.value)}
          />
        </header>
      </section>

      <section className="contenedor">
        <p className="description">
          Bienvenido a Leolandia, tu destino ideal para acceder a una amplia variedad de títulos literarios de forma gratuita. 
          Aquí, podrás encontrar desde clásicos de la literatura hasta obras contemporáneas, 
          todos disponibles para descarga inmediata.
        </p>
        <img src={fondo} alt="fondo" className="fondo" />
      </section>

      <section className='allApp'>
        <section className="categorias">
          <label htmlFor="categoria-select">Escoge un género literario:</label>
          <select 
            id="categoria-select" 
            className="categoria-select"
            value={categoria} 
            onChange={e => setCategoria(e.target.value)}
          >
            {categorias.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
      </section>

      {categoriaTitulo && (
        <h2 className="categoria-titulo">Libros: {categoriaTitulo}</h2>
      )}

      <section className="libros-lista">
        {librosFiltrados.map((libro, index) => (
          <section key={index} className="libro">
            <img src={libro.portada} alt={`Portada de ${libro.titulo}`} className="libro-portada" />
            <h2>{libro.titulo}</h2>
            <p>Autor: {libro.autor}</p>
            <a href={libro.enlacePDF} target="_blank" rel="noopener noreferrer" className="descargar-link">Descargar PDF</a>
          </section>
        ))}
      </section>

      </section>

      <footer className="footer">
        <nav className="footer-nav">
          <ul>
            <li><a href="#">Cómo ayuda</a></li>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Política de privacidad</a></li>
          </ul>
        </nav>
      </footer>
      
    </section> 
  );
};

export default App;
