import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

function EditGenreForm() {

    const navigate = useNavigate()

    const { genre_id } = useParams()

    const [genre, setGenre] = useState({
        name: '',
        description: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/genres/${genre_id}`)
            const resData = await response.json()
            setGenre(resData)
        }
        fetchData()
    }, [genre_id])

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://localhost:5000/genres/${genre.genre_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(genre)
        })

        navigate.push(`/genres/${genre.genre_id}`)
    }

    return (
        <main>
            <h1>Edit Genre</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Genre Name</label>
                    <input
                        required
                        value={genre.name}
                        onChange={e => setGenre({ ...genre, name: e.target.value })}
                        className="form-control"
                        id="name"
                        name="name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        required
                        value={genre.description}
                        onChange={e => setGenre({ ...genre, description: e.target.value })}
                        className="form-control"
                        id="description"
                        name="description"
                    />
                </div>
                <input className="btn btn-primary" type="submit" value="Save" />
            </form>
        </main>
    )
}

export default EditGenreForm