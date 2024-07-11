import PropTypes from 'prop-types'
export const GifItem = ({ id, title, url }) => {
    return (
        <>
            <div className='card' key={id}>
                <p>{title}</p>
                <img src={url} alt={title} />
            </div>
        </>
    )
}

GifItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
