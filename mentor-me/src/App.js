import React from 'react';
import NavMenu from './components/NavMenu/NavMenu';
import AppRouting from './components/AppRouting';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <AppRouting />
      <Footer />
    </div>
  );
}

export default App;
