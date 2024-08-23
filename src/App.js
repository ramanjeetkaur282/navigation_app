import './App.css';
import { locations } from './constants/data';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <h1>Navigation</h1>
      <Navigation data={locations}/>
    </div>
  );
}

export default App;
