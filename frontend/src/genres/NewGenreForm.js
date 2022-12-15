import { useState } from "react"
import { useNavigate } from "react-router-dom"

function NewGenreForm() {
    const navigate = useNavigate()

    const [genre, setGenre] = useState({
        name: '',
        description: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://localhost:5000/genres`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(genre)
            
        })
        
        navigate.push('/genres')
    }

    return (
        <main>
            <h1>Add a New Genre</h1>
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
                <input className="btn btn-primary" type="submit" value="Add Place" />
            </form>
        </main>
    )
}

export default NewGenreForm