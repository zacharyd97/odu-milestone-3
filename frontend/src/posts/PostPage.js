import { useEffect, useState } from "react";


function PostPage(post_id) {
    const [post, setPost] = useState({ comment: [] })

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/posts/${1}`)
            const resData = await response.json()
            setPost(resData)
        }
        fetchData()
    }, [])



    let commentsFormatted = post.comment.map((comment) => {
        return (
            <div key={comment.comment_id}>
                <p>
                    {comment.comment_text}
                </p>
            </div>
        )
    })

    return (
        <div>
            <div>
                <h2>{post.title}</h2>
                <p>{post.post_text}</p>
            </div>
            <div>
                {commentsFormatted}
            </div>
        </div>

    )
}





export default PostPage

