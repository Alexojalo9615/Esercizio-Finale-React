import { Card, Container } from 'react-bootstrap'
import books from './dati/fantasy.json'
import { useParams, Link } from 'react-router-dom'
import React from 'react';
import CommentArea from './CommentArea.js';


const BookDetails = () => {

    const { id } = useParams();
    const book = books.books.find(b => b.asin === id); // Con questa riga di codice si cerca nell'array books e restituisce il primo libro il cui asin è uguale al ID. Se nessun libro corrisponde restituisce "undefined"


    if (!book) {
        return <h6>Libro non trovato</h6>;
    }


    return (

        <Container className='py-5 container'>
            <Link to="/" className='btn btn-outline-dark mb-4'>
                ← Torna alla Home
            </Link>

            <Card className='border-0'>
                <div className='row g-0'>
                    <div className='col-md-3'>
                        <div
                            className='card-image-container'
                            style={{
                                height: "550px",
                                width: "350px",
                                backgroundImage: `url(${book.img})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        />
                    </div>
                    <div className='col-md-8' id='testo'>
                        <Card.Body className='p-5 ms-3 text-start'>
                            <h6 className='mb-4 fs-2'>{book.title}</h6>
                            <div className='mb-4'>
                                <p className='mb-2'>
                                    <strong>Categoria:</strong> <span className='badge bg-secondary'>{book.category}</span>
                                </p>
                                <p className='mb-2'>
                                    <strong>Prezzo:</strong> <span className='text-primary'>€{book.price}</span>
                                </p>
                                <p className='mb-0'>
                                    <strong>ASIN:</strong> <code>{book.asin}</code>
                                </p>
                            </div>
                        </Card.Body>
                    </div>

                </div>
            </Card>
            <div className='mt-5'>
                <CommentArea asin={book.asin} />
            </div>

        </Container>
    );
};

export default BookDetails