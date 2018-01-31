import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './App/App.jsx';

// render(<App />, document.getElementById('app'));
ReactDOM.render(<App content = "All will pass through"/>, document.getElementById('app'));

// setTimeout(() => {
//    ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 100000);