

const SingleComment = ({ comment }) => {

    return (

        <li className="single-comment">

            <strong>Voto:</strong> {comment.rate} ⭐ - <em>{comment.comment}</em>
            <p><em>ASIN: </em>{comment.elementId}/5</p>
        </li>

    );

};

export default SingleComment