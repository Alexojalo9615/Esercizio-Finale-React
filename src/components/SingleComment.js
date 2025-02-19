

const SingleComment = ({ comment, onDelete }) => {

    return (

        <li className="single-comment" >

            <strong>Voto:</strong> {comment.rate} ⭐ - <em>{comment.comment}</em>
            <p><em>ASIN: </em>{comment.elementId}/5</p>
            <button // Pulsante per eliminare il singolo commento
                className="btn btn-danger"
                onClick={() => onDelete(comment._id)}>
                Elimina
            </button>
        </li>

    );

};

export default SingleComment