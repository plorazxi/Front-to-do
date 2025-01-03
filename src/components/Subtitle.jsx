import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Subtitle({ ask, link, toRouter }) {
    const navigate = useNavigate();

    return (
        <div className='Subtitle'>
            <p>{ask} <a onClick={() => navigate(toRouter)}>{link}</a></p>
        </div>
    )
}

Subtitle.propTypes = {
    ask: PropTypes.string,
    link: PropTypes.string,
    toRouter: PropTypes.string
}

export default Subtitle;