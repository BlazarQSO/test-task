import React, { useState } from 'react';
import { render } from 'react-dom';

import './index.css';

import { f } from './component/console/console';

const a = [1, 2, 3, 4];
console.log('+++++++++++++');
console.log(...a);
f();

const App = () => {
    const n = 100;
    const [count, setCount] = useState(100);

    const onClick = () => {
        setCount(50);
    };

    return (
        <button type="button" onClick={onClick}>{count}</button>
    );
};

render(<App />, document.getElementById('root'));
