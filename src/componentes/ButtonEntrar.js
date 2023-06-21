import React from 'react';

export default function ButtonEntrar(props) {
    const { value } = props;

    return (
        <>
            <input type="submit" className="Entrar" value={value} />
        </>
    );
}
