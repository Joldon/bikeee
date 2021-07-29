import './App.css';
import Header from './components/Header'
import PopularBikes from './components/PopularBikes'

import Card from 'react-bootstrap/Card'

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <PopularBikes />
    </div>
  );
}

export default App;
