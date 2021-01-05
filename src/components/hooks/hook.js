import React, { useState } from 'react';
import './hook.css';

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex align-items-center">
      <p className="mb-0 me-3">Vous avez cliqué {count} fois.</p>
      <button onClick={() => setCount(count + 1)} className="btn btn-info">Cliquez-ici</button>
    </div>
  )
}

export default Count;