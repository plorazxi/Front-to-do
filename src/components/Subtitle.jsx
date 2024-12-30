import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Subtitle({ ask, link, toRouter }) {
    const navigate = useNavigate();

    return (
        <>
            <p>{ask} <a onClick={() => navigate(toRouter)}>{link}</a></p>
        </>
    )
}

Subtitle.propTypes = {
    ask: PropTypes.string,
    link: PropTypes.string,
    toRouter: PropTypes.string
}

export default Subtitle;