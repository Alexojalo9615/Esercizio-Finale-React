import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useState } from "react"





function MyNav() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Browser</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


function Welcome() {
    alert("Welcome to my page");
    return (
        <h2>Welcome to my page</h2>
    )

}

 const SingleBook = ({ book }) => {

    const [selected, setSelected] = useState(false)

    return (
        <Card className={`book-card ${selected ? "selected" : ""}`} // L'operatore ternario è una scorciatoia per il costrutto "if-else" e si legge così: se "selected", è true viene aggiunta la classe selected se è false viene aggiunta una stringa vuota;
        onClick={() => setSelected (!selected)}
        
        >
            <div className='img-container'
                style={{
                    height: "25rem",
                    backgroundImage: `url(${book.img})`,
                    backgroundSize: "cover",    // "cover" indica che l'immagine di sfondo deve essere ridimensionata per coprire l'elemento
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"     // Questa proprietà controlla se un immagine di sfondo viene ripetuta o meno all' interno di un elemento
                }}

            >
            </div>
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <div className='d-flex justify-content-center'>
                    <small><Card.Text>{book.category}</Card.Text></small>
                </div>
                <Card.Text>{book.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SingleBook
export { MyNav, Welcome }