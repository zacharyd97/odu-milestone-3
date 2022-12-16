import { useContext, useState } from "react"
import { CurrentUser } from "../contexts/CurrentUser"

function NewPostForm({ genre, onSubmit }) {
    const { currentUser } = useContext(CurrentUser)

    const [post, setPost] = useState({
        title: '',
        post_text: ''
    })

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(post)
        setPost({
            title: '',
            post_text: ''
        })
    }

    if (!currentUser) {
        return <p>You must be logged in to make a post</p>
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-sm-12">
                    <label htmlFor="title">Title</label>
                    <textarea
                        required
                        value={post.title}
                        onChange={e => setPost({ ...post, title: e.target.value })}
                        className="form-control"
                        id="title"
                        name="title"
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-sm-4">
                    <label htmlFor="post_text">Text</label>
                    <textarea
                        required
                        value={post.post_text}
                        onChange={e => setPost({ ...post, post_text: e.target.value })}
                        id="post_text"
                        name="post_text"
                        className="form-control"
                    />
                </div>
            </div>
            <input className="btn btn-primary" type="submit" value="Add Post" />
        </form>
    )
}
export default NewPostForm