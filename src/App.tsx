import React, { useState } from 'react';
import './index.css';

const App: React.FC = () => {
    const [count, setCount] = useState(100);

    const onClick = () => {
        setCount(50);
    };

    return (
        <button type="button" onClick={onClick}>
            {count}
        </button>
    );
};

export default App;
