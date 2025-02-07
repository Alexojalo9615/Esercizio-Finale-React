import  AddComment  from './AddComment.js';
import CommentList from './CommentList.js';
import { useState, useEffect } from 'react';


function CommentArea({asin}) {

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        //Effettua la fetch delle recensioni quando cambia l'asin
        const fetchComments = async () => {

            setLoading(true);
            setError(null);

            try {

                const resp = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYxYzRhNjUzMDRhNzAwMTUxNDhiNDMiLCJpYXQiOjE3Mzg2OTEyMzgsImV4cCI6MTczOTkwMDgzOH0.AOX72FQERNo_5vClM2Y-hI3WKRedrXSqxHeLUZI3X34",
                        "Content-Type": "application/json"
                    }
                });

                if (resp.ok) {

                    const data = await resp.json();
                    setComments(data); // Salvo le recensioni nello stato 

                } else {

                    setError("Errore nel recupero delle recensioni.");
                }

            } catch (error) {

                setError("Errore di rete:", error);

            } finally { // Finally è una parte opzionale del blocco "try-catch", il codice dentro finally VIENE SEMPRE ESEGUITO, sia che il "try" vada a buon fine che si verifichi un errore. In questo caso viene utilizzato per fermare lo stato di caricamento (loading) mettendolo su "false", a prescindere dal risultato della fetch. 
                setLoading(false);
            }
        }

        if (asin) {
            fetchComments(); // Chiama la funzione se l'ASIN è definito
        }

    }, [asin]); // L'effetto si esegue ogni volta che cambia l'ASIN

    const nuovoCommento = (newComment) => { // Funzione per aggiungere un nuovo commento nella lista esistente

        setComments((prevComments) => [...prevComments, newComment]); // "preComments" rappresenta lo stato precedente, cioè l'array di recensioni già esistenti, mentre "newComment" è il nuovo commento che vogliamo aggiungere. [...prevComments, newComment] crea un array che contiene tutti i commenti precedenti (prevComments) + il nuovo commento aggiunto alla fine (newComment)

    };

    return (

        <div className='comment-area'>

            <h5>Recensioni per questo libro</h5>
            {loading && <p>Caricamento in corso ...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* {Renderizza commenti solo se ci sono recensioni} */}
            {/* Passa la lista delle recensioni come prop  */}
            
            {comments.length > 0 ? <CommentList comments={comments} /> : <p>Non ci sono recensioni.</p>}

            {/* {Passa la funzione nuovoCommento a addComment} */}

            <AddComment asin={asin}  />

        </div>
    )

}

export default CommentArea