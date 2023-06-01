import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import FicheLogement from './pages/FicheLogement/FicheLogement';
import APropos from './pages/A-Propos/A-Propos';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Page404 from './pages/Page404/Page404';
import './utils/style/app.scss';

function App() {
    return (
        <Router>
            {/*Vérifie le rendu des composants dépendants des routes */}
            <React.StrictMode>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/fiche-logement/:appartmentId"
                        element={<FicheLogement />}
                    />
                    <Route path="/a-propos" element={<APropos />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
                <Footer />
            </React.StrictMode>
        </Router>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

export default App;
