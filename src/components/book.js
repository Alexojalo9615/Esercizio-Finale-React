import SingleBook from "./function.js"
import books from './fantasy.json'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Form from 'react-bootstrap/esm/Form'
import { useState } from "react"



function AllTheBooks() {

    const [searchBook, setSearchBook] = useState("");
    const filteredBooks = books.books.filter((book) => book.title.toLowerCase().includes(searchBook.toLowerCase()));  // Qua gli sto dicendo, vai dentro libri, filtra un libro con titolo in minuscolo e aggiungilo a "filteredBook" se include gli elementi che andremo a inserire in "searchBook" 
    return (
        <>
            <Row className="rownp mb-4">
                <Form>
                    <Form.Group>
                        <Form.Label>Search</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Cerca un libro"
                        value={searchBook} // Ogni volta che inserisco un elemento succede (guarda sopra)
                        onChange={(e) => setSearchBook (e.target.value)} // Quando c'è un cambiamento sull'input fai partire la funzione "setSearchBook" e fai tornare il target value su "filteredBook", attivando lo "useState"
                        /> 
                    </Form.Group>
                </Form>

            </Row>
            <Row className='row' >
                {filteredBooks.map((book) => {
                    return (
                        <>
                            <Col className="d-flex mb-4" key={book.asin} sm={6} md={4} lg={3} xl={3}>
                                <SingleBook book={book} />
                            </Col>
                        </>
                    );
                })}
            </Row>
        </>
    );
}

export default AllTheBooks;

