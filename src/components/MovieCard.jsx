import { Link } from 'react-router-dom';
import styles from '../components/MovieCard.module.css';

export function MovieCard({ movie }) {
    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <li className={styles.movieCard}>
            <Link to={"/movies/"+movie.id}>
                <img className={styles.movieImage} width={230} height={345} src={imgUrl} alt={movie.title} />
            </Link>
            <div className={styles.title}>{movie.title}</div>
        </li>
    )
}