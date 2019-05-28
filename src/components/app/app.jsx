import React        from 'react';
import {MainScreen} from "../main-screen/main-screen.jsx";
import {films}      from "../../__mock__/films";

export const App = () => <MainScreen moviesList={films}/>;
