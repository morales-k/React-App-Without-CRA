import React from 'react';

const Button = (props) => {
    const { clickFunc } = props;

    return (
        <button 
            type="button"
            onClick={() => clickFunc()}>Click me</button>
    )
}

export default Button;