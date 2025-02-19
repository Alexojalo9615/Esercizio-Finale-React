import SingleBook from "./SingleBook.js"
import books from './dati/fantasy.json'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { useState } from "react"



function AllTheBooks() {

    const [searchBook, setSearchBook] = useState("");
    const [selectedBook, setSelecteBook] = useState(null)
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
                    const isSelected = selectedBook === book.asin;
                    return (
                        <>
                            <Col className="d-flex mb-4" key={book.asin} sm={6} md={4} lg={3} xl={3}>
                                <SingleBook 
                                book={book}
                                selected={isSelected} 
                                onSelect={() => setSelecteBook(book.asin)}/>
                            </Col>
                        </>
                    );
                })}
            </Row>
        </>
    );
}

export default AllTheBooks;

