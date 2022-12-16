import { useContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";

function PostCard() {
    const { currentUser } = useContext(CurrentUser)

    let deleteButton = null;

    if (currentUser?.userId === post.user_id) {
        deleteButton = (
            <button className="btn btn-danger" onClick={onDelete} >
                Delete Post
            </button>
        )
    }
    return (
        <div className="border col-sm-4">

            <h4>{post.post_text}</h4>
            <h3>
                <strong>- {post.user_id.user_name} </strong>
            </h3>
            {deleteButton}
        </div>
    )
}
export default PostCard