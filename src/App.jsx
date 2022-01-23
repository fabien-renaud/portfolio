import {About, Home, Contact, Resume} from './sections';
import {NavBar} from './components';
import 'normalize.css';
import './App.scss';
import {Footer} from './components/Footer/Footer';

export const App = () => {
    return (
        <>
            <NavBar />
            <Home />
            <About />
            <Resume />
            <Contact />
            <Footer />
        </>
    );
};
