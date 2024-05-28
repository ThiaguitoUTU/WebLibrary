import React, { useState } from 'react';
import './AddBook.css';

const AddBook = ({ onAddBook, onBackToMain }) => {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [portada, setPortada] = useState('');
    const [enlacePDF, setEnlacePDF] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {
            titulo,
            autor,
            portada,
            enlacePDF,
            categoria
        };
        onAddBook(newBook);
        setTitulo('');
        setAutor('');
        setPortada('');
        setEnlacePDF('');
        setCategoria('');
    };

    return (
        <section>
            
            <button className="back-button"><a href="./src\App.jsx">Volver a principal</a></button>
            <section className="add-book-container">
            <h2>Añadir un Nuevo Libro</h2>
            <form className="add-book-form" onSubmit={handleSubmit}>
                <div>
                    <label>Título: </label>
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
                </div>
                <div>
                    <label>Autor: </label>
                    <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} required />
                </div>
                <div>
                    <label>Portada: </label>
                    <input type="text" value={portada} onChange={(e) => setPortada(e.target.value)} required />
                </div>
                <div>
                    <label>Enlace PDF: </label>
                    <input type="text" value={enlacePDF} onChange={(e) => setEnlacePDF(e.target.value)} required />
                </div>
                <div>
                    <label>Categoría: </label>
                    <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} required />
                </div>
                <button type="submit">Añadir Libro</button>
            </form>
            </section>
        </section>
    );
};

export default AddBook;
