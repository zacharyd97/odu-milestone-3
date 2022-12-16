import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


function GenreIndex() {

    const navigate = useNavigate()

    const [genres, setGenres] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/genres`)
            const resData = await response.json()
            setGenres(resData)
        }
        fetchData()
    }, [])

    let genresFormatted = genres.map((genre) => {
        return (
            <div key={genre.genre_id}>
                <h2>
                    <a href="#" onClick={() => navigate(`/genres/${genre.genre_id}`)}>
                        {genre.name}
                    </a>
                </h2>
                <p>
                    {genre.description}
                </p>
            </div>
        )
    })





    return (
        <div>
            <h1>Genre index</h1>
            {genresFormatted}
        </div>
    )
}





export default GenreIndex

