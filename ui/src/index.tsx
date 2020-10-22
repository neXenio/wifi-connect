import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import 'promise-polyfill/src/polyfill';

import App from './components/App';
import './index.css';
import './font.css';
ReactDOM.render(<App />, document.getElementById('root'));
