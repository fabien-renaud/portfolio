import {createContext, useState} from 'react';
import {About, Home, Contact, Resume} from './sections';
import {Footer, NavBar} from './components';
import 'normalize.css';
import './App.scss';

export const ColorContext = createContext({
    pickedColor: null,
    setPickedColor: (color) => {}
});

export const ContextProvider = ColorContext.Provider;

export const App = () => {
    const [pickedColor, setPickedColor] = useState();

    return (
        <ContextProvider value={{pickedColor, setPickedColor}}>
            <NavBar />
            <Home />
            <About />
            <Resume />
            <Contact />
            <Footer />
        </ContextProvider>
    );
};
