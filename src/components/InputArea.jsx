import PropTypes from "prop-types";

function InputArea ({ children }) {
    return (
        <div id="InputArea">
            {children}
        </div>
    )
}

InputArea.propTypes = {
    children: PropTypes.element.isRequired
}

export default InputArea;