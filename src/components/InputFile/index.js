import React, {useRef} from 'react';
import propTypes from 'prop-types';

export default function InputFile(props) {
    const {
        value,
        placeholder,
        name,
        accept,
        prepend,
        append,
        outerClassName,
        inputClassName,
    } = props; 

    const refInputFile = useRef(null);

    return (
        <div className={['input-text mb-3', outerClassName].join(' ')}>
            <div className='input-group'>
                { prepend && (
                    <div className='input-group-prepend bg-gray-900'>
                        <span className='input-group-text'>{prepend}</span>
                    </div>
                )}

                <input
                    ref={refInputFile}
                    accept={accept}
                    name={name}
                    type='file'
                    className='d-none'
                    value={value}
                    placeholder={placeholder}
                    onChange={props.onChange}
                />

                <input
                    onClick={() => refInputFile.current.click()}
                    defaultValue={value}
                    placeholder={placeholder}
                    className={['form-control', inputClassName].join(' ')}
                />

                {append && (
                    <div className='input-group-append bg-gray-900'>
                        <span className='input-group-text'>{append}</span>
                    </div>
                )}
            </div>
        </div>
    );
}

InputFile.defaultProps = {
    placeholder: 'Browse a file...',
}

InputFile.propTypes = {
    name: propTypes.string.isRequired,
    accept: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
    append: propTypes.oneOfType([propTypes.number, propTypes.string]),
    placeholder: propTypes.string,
    outerClassName: propTypes.string,
    inputClassName: propTypes.string,
}
