import PropTypes from 'prop-types';

function Label({ name, placeholder, type, value, onChange }) {
    return (
        <>
            <h2>{name}</h2>
            <input 
                name={name} 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={(e) => onChange(e.target.value)} 
            />
        </>
    )
}

Label.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
}

export default Label;