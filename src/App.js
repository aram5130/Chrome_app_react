import './App.css';
import RandomBackground from './components/Background';
import Clock from './components/Clock';
import Greeting from './components/Greeting';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <Clock />
      <Greeting />
      <Weather />
      <RandomBackground />
    </div>
  );
}

export default App;
