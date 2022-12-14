import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"

function Home(data) {

    // const navigate = useNavigate()

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/posts/`)
            const resData = await response.json()
            setPosts(resData)
        }
        fetchData()
    }, [])

    // let posts = data.posts
    let postsMap = posts.map((post) => {
        return(
            <div>
                <h2>{post.title}</h2>
                <p>{post.post_text}</p>
            </div>
        )
    });


    return (
        <main>
            <h1>Home Page</h1>
            
            <section>
                <div>
                    <h2>Friends</h2>
                </div>
                <div>
                    <h2>Main Feed</h2>
                    {postsMap}
                </div>
                <div>
                    <h2>Chats</h2>
                </div>
            </section>
        </main>
    )
}

export default Home