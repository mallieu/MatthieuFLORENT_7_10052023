import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FicheLogement from './pages/Fiche-Logement';
import APropos from './pages/APropos';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import './utils/style/app.scss';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/fiche-logement/:logementNumber"
                    element={<FicheLogement />}
                />
                <Route path="/a-propos" element={<APropos />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);
