import { ListGroup } from "react-bootstrap/";
import SingleComment from "./SingleComment.js";

const CommentList = ({ comments }) => {


    return (

        <ListGroup>

            {comments.length > 0 ? (
                comments.map((comment) => (

                    <SingleComment key={comment._id} comment={comment} />
                ))
            ) : (
                <p>Nessuna recensione disponibile</p>
            )}
        </ListGroup>
    );
};

export default CommentList;
