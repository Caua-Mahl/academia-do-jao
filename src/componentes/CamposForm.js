import React from 'react';

export default function CamposForm(props) {
  const { id, label, type, placeholder } = props;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} placeholder={placeholder} />
    </div>
  );
}