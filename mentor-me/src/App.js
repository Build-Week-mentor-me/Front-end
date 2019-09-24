import React from 'react';
import NavMenu from './Components/NavMenu/NavMenu';
import AppRouting from './Components/AppRouting';
import Footer from './Components/Footer/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavMenu />
      <AppRouting />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
