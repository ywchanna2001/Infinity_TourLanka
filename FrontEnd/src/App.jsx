import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Optional, for additional styling
import TrendingSection from './pages/TrendingSection';



function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-4">Trending</h1>
      <TrendingSection />
    </div>
  );
}

export default App;
