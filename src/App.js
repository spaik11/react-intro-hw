import React from 'react';
import Header from './components/Header/Header';
import SidebarItems from './components/SidebarItems/SidebarItems';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="middle">
        <SidebarItems />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
