import Card from 'react-bootstrap/Card'
import CommentArea from "./CommentArea.js";
import { Link } from "react-router-dom";





const SingleBook = ({ book, selected, onSelect }) => {


    return (
        <Link to={`/book/${book.asin}`} style={{ textDecoration: 'none' }}>
            <Card className={`book-card ${selected ? "selected" : ""}`} // L'operatore ternario è una scorciatoia per il costrutto "if-else" e si legge così: se "selected", è true viene aggiunta la classe selected se è false viene aggiunta una stringa vuota;
                onClick={onSelect}
                data-testid="libri"
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

                    {/* In questo caso stiamo passando l'ASIN del libro al componente "CommentArea" */}
                    {selected && <CommentArea asin={book.asin} />}
                </Card.Body>
            </Card>
        </Link>
    )
}

export default SingleBook
