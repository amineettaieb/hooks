import { useState } from "react"
import Filter from "../Filter"
import MovieCard from "../MovieCard"
import { faker } from '@faker-js/faker'
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    list: {
        marginTop: 50,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, 400px)',
        justifyContent: 'center'
    }
})

const MovieList = () => {
    const [movies, setMovies] = useState(() => {
        return [{
            title: 'The Joker',
            description: 'A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.',
            posterURL: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
            rating: 80,
        }].concat(Array(Math.floor(5 + Math.random() * 3)).fill().map(() => ({
            title: faker.random.words(Math.floor(1 + Math.random() * 4)),
            description: faker.lorem.paragraph(),
            posterURL: faker.image.fashion(640, 480, true),sss
            rating: 20 * Math.floor(5 * Math.random()) + 20,
        })))
    })
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState(0)
    const { list: listClass } = useStyles()
    return <>
        <Filter {...{ title, rating, setTitle, setRating }} />
        <div className={listClass}>
            {movies.map((m, key) => ({ ...m, key })).filter(m => m.title.includes(title) && m.rating >= rating).map(m => <MovieCard {...m} />)}
        </div>
        <MovieCard key={movies.length} submit={r => setMovies([...movies, r])} />
    </>
}



export default MovieList