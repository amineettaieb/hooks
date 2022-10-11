import { Rating } from 'react-simple-star-rating'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    filter: {
        padding: 16,
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        right: 0,
        background: 'white',
        gap: 50,
        zIndex: 999,
        boxShadow: '0 0 7px #00000063',
    }
})

const Filter = ({ title, setTitle, rating, setRating }) => {
    const { filter } = useStyles()
    return <div className={filter}>
        <input placeholder="Search Title ..." value={title} onChange={e => setTitle(e.target.value)} />
        <Rating size={24} ratingValue={rating} onClick={e => e === rating ? setRating(0) : setRating(e)} />
    </div>
}


export default Filter