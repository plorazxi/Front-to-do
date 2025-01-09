import PropTypes from 'prop-types'
import { useState } from 'react';
import { Loader } from 'lucide-react';

function Button({ content, event }) {
    let [isLoading, setisLoading] = useState(false)

    async function onClick() {
        setisLoading(true);
        await event();
        setisLoading(false);
    }

    return (
        <div className="ContainerSubmitButton">
            <button
                className='SubmitButton'
                onClick={onClick}
            >
                {isLoading ? <Loader /> : content}
            </button>
        </div>
    )
}

Button.propTypes = {
    content: PropTypes.string,
    event: PropTypes.func
}

export default Button;