import React from 'react';

const Label = (props) => {
    const { text, required, htmlFor } = props;
    return (
        <>
            <label 
                htmlFor={htmlFor}
            >
                <span>{text}</span>
                {required && <span>*</span>}
            </label>
        </>
    )
}

export default Label;