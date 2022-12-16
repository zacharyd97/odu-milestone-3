import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { CurrentUser } from "../contexts/CurrentUser";
import PostCard from "../components/PostCard"
import NewPostForm from "../components/NewPostForm"


function GenrePage() {
    const { genre_id } = useParams()

    const navigate = useNavigate()

    const { currentUser } = useContext(CurrentUser)

    const [genre, setGenre] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/genres/${genre_id}`)
            const resData = await response.json()
            setGenre(resData)
        }
        fetchData()
    }, [genre_id])

    if (genre === null) {
        return <h1>Loading</h1>
    }

    function editGenre() {
        navigate.push(`/genres/${genre.genre_id}/edit`)
    }

    async function deleteGenre() {
        await fetch(`http://localhost:5000/genres/${genre.genre_id}`, {
            method: 'DELETE'
        })
        navigate.push('/genres')
    }

    async function deletePost(deletedPost) {
        await fetch(`http://localhost:5000/genres/${genre.genre_id}/posts/${deletedPost.post_id}`, {
            method: 'DELETE'
        })

        setGenre({
            ...genre,
            posts: genre.posts
                .filter(post => post.post_id !== deletedPost.post_id)
        })
    }

    async function createPost(postAttributes) {
        const response = await fetch(`http://localhost:5000/genres/${genre.genre_id}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postAttributes)
        })

        const post = await response.json()

        setGenre({
            ...genre,
            posts: [
                ...genre.posts,
                post
            ]
        })

    }



    let posts = (
        <h3 className="inactive">
            No posts yet!
        </h3>
    )

    if (genre.posts.length) {
        posts = genre.posts.map(post => {
            return (
                <PostCard key={post.post_id} post={post} onDelete={() => deletePost(post)} />
            )
        })
    }


    let genreActions = null

    if (currentUser?.role === 'admin') {
        genreActions = (
            <>
                <a className="btn btn-warning" onClick={editGenre}>
                    Edit
                </a>{` `}
                <button type="submit" className="btn btn-danger" onClick={deleteGenre}>
                    Delete
                </button>
            </>
        )
    }

    return (
        <main>
            <div className="row">
                {/* <div className="col-sm-6">
                    <img style={{ maxWidth: 200 }} src={place.pic} alt={place.name} />
                </div> */}
                <div className="col-sm-6">
                    <h1>{genre.name}</h1>
                    <br />
                    <h2>
                        {genre.description}
                    </h2>
                    <br />
                    {genreActions}
                </div>
            </div>
            <hr />
            <h2>Posts</h2>
            <div className="row">
                {posts}
            </div>
            <hr />
            <h2>Make Post</h2>
            <NewPostForm
                genre={genre}
                onSubmit={createPost}
            />
        </main>
    )
}





export default GenrePage

