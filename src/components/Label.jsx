import PropTypes from 'prop-types';

function Label({ name, placeholder, type, value, onChange }) {
    return (
        <div className='Label'>
            <h3>{name}:</h3>
            <input 
                name={name} 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={(e) => onChange(e.target.value)} 
            />
        </div>
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