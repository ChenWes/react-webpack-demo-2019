import React from 'react';
import ReactDOM from 'react-dom';

import App from "./js/components/container/App";

const root = document.getElementById('root');
root ? ReactDOM.render(<App />, root) : false;
