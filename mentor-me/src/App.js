import React from 'react';
import NavMenu from './Components/NavMenu/NavMenu';
import AppRouting from './Components/AppRouting';
import Footer from './Components/Footer/Footer';
import './App.css';
import FormikSignupForm from './Components/Signup';

function App() {
  return (
    <div className="App">
      <AppRouting />
      <NavMenu />
      <FormikSignupForm />
      <Footer />
    </div>
  );
}

export default App;
