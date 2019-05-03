import React from 'react';
import ReactDom from 'react-dom';
import {App} from "./components/app/app.jsx";

const rootElement = document.querySelector(`#root`);
ReactDom.render(<App/>, rootElement);

