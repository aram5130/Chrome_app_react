import './App.css';
import RandomBackground from './components/Background';
import Clock from './components/Clock';
import Greeting from './components/Greeting';
import TodoTemplate from './components/todotemplates/TodoTemplate';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <Clock />
      <Greeting />
      <Weather />
      <TodoTemplate />
      <RandomBackground />
    </div>
  );
}

export default App;
