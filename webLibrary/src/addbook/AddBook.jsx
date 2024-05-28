import React, { useState } from 'react';

const AddBook = ({ onAddBook }) => {
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
        <div>
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;
