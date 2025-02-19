import { useState } from "react";


function AddComment({ asin, onAddReview }) { // Uso il valore di ASIN per associare il commento al libro giusto (es. elementId: asin)


    const [commento, setCommento] = useState("");
    const [voto, setVoto] = useState("");


    const handleSubmit = async (e) => {

        e.preventDefault();

        console.log("Dati raccolti:");
        console.log("Commento:", commento);
        console.log("Voto:", voto);


        const newComment = { // Crea l'oggetto che verrà inviato al server

            comment: commento,
            rate: parseInt(voto),
            elementId: asin, // Uso l'elemento ASIN passato come prop
        }

        console.log("Dati inviati:", newComment);


        try {
            const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYxYzRhNjUzMDRhNzAwMTUxNDhiNDMiLCJpYXQiOjE3Mzk5ODI1MTAsImV4cCI6MTc0MTE5MjExMH0.dq-ekzp5rYOybLejDa5UVAACpG2iuHWApgvhw3-_o8k",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newComment)
            });

            if (resp.ok) {

                const risposta = await resp.json();

                alert('Recensione inviata!')
                console.log("Commento aggiunto con successo!");

                setCommento(""); // Resetto i campi del form dopo il successo
                setVoto("");

            } else {

                console.error("Errore nell'aggiunta del commento");
                const errorData = await resp.json();
                console.error("Dettagli errore:", errorData);

            }
        } catch (error) {
            console.error("Errore di rete:", error);
        }
    };

    return (

        <form className="add-comment">

            <h4>Aggiungi una recensione</h4>

            {(
                <>
                    <div className='comment-section mt-3'>
                        <textarea
                            placeholder='Scrivi un commento...'
                            value={commento}
                            onChange={(e) => setCommento(e.target.value)}
                            className='form-control'
                            rows={3}
                            onClick={(e) => e.stopPropagation()} // Blocca la chiusura quando si clicca sulla textarea
                        />
                    </div>

                    <label for="inp" >Voto</label>

                    <div>

                        <input
                            id='inp'
                            type='range'
                            value={voto}
                            name='votazione'
                            min={0}
                            max={5}
                            onChange={(e) => setVoto(e.target.value)}
                            onClick={(e) => e.stopPropagation()} // Blocca la chiusura quando si clicca sull input
                        ></input>
                    </div>

                    <hr></hr>

                    <button onClick={handleSubmit} className='btn btn-outline-primary' type="submit" >Invia</button>
                </>
            )}
        </form>
    );
}
export default AddComment