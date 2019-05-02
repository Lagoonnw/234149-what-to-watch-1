import React from 'react';
import {MainScreen} from "../main-screen/main-screen.jsx";

const moviesList = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Snatch`];
export const App = () => <MainScreen moviesList={moviesList}/>;
