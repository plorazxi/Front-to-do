import PropTypes from 'prop-types'

function Button({ content, event }) {
    return (
        <button onClick={event}>{content}</button>
    )
}

Button.propTypes = {
    content: PropTypes.string,
    event: PropTypes.func
}

export default Button;