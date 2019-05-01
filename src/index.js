import React from 'react';
import ReactDom from 'react-dom';
import {Main} from "./components/main.jsx";

const rootElement = document.querySelector(`#root`);
ReactDom.render(<Main/>, rootElement);

