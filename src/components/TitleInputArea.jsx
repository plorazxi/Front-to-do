import PropTypes from 'prop-types';

function TitleInputArea ({children}) {
    return (
        <div className="title">
            {children}
        </div>
    )
}

TitleInputArea.propTypes = {
    children: PropTypes.array
}

export default TitleInputArea;