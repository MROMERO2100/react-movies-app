import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { get } from "../data/httpClient"
import { getMovieImg } from "../utils/getMovieImg";
import '../pages/MovieDetail.css';

export function MovieDetail() {
    const { movieId } = useParams();
    const [movie, SetMovie] = useState([]);
    const [generos, Setgeneros] = useState([]);

    useEffect(() => {
        get("/movie/" + movieId).then((data) => {
            SetMovie(data);
            Setgeneros(data.genres[0]);
        });
    }, [movieId]);
    const imageUrl = getMovieImg(movie?.poster_path, 500);

    return (
        <div className="detailsContainer">
            <img className="col movieImage" src={imageUrl} alt={movie.title} />
            <div className="col movieDetails">
                <p className="title">
                    <strong>Title: </strong>{movie.title}
                </p>
                <p>
                    <strong>Gender: </strong>
                    {generos.name}
                </p>
                <p>
                    <strong>Description: </strong>
                    {movie.overview}
                </p>                
            </div>
        </div>
    );
}