// Import React and necessary modules from react-router-dom for routing
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components for navigation and page content
import Navbar from './components/Navbar';
import StreamList from './components/StreamList';
import Movies from './components/Movies';
import Cart from './components/Cart';
import About from './components/About';
import Options from './components/Options';
import TMDB from './components/TMDB';

// Import global CSS for styling
import './App.css';

const App = () => {
    return (
        <Router>
            {/* Navbar is a shared component across all pages */}
            <Navbar />
            {/* Routes define different paths and components rendered for each path */}
            <Routes>
                <Route path="/" element={<StreamList />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/options" element={<Options />} />
                <Route path="/tmdb" element={<TMDB />} /> 
            </Routes>
        </Router>
    );
};

export default App;

