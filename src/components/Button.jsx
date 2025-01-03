import PropTypes from 'prop-types'

function Button({ content, event }) {
    return (
        <div className="ContainerSubmitButton">
            <button
                className='SubmitButton'
                onClick={event}
            >
                {content}
            </button>
        </div>
    )
}

Button.propTypes = {
    content: PropTypes.string,
    event: PropTypes.func
}

export default Button;