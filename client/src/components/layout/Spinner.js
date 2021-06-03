import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export const Spinnerr = () => {
  return (
    <div>
      <Spinner
        style={{
          padding: 30,
          marginTop: 250,
          marginLeft: 500,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        animation="grow"
        variant="secondary"
      />
    </div>
  );
};
