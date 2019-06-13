import React from 'react';
import './styles.scss';

function Segment({children}) {
  return (
    <div className="segment">
      {children}
    </div>
  );
}

export default Segment;