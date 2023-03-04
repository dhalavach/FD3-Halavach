import RainbowFrame from './components/RainbowFrame.js';
import './App.css';

function App() {
  const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    '#00BFFF',
    'blue',
    'purple',
  ];
  return <RainbowFrame colors={colors}><h1>Hello, world!</h1></RainbowFrame>;
}

export default App;
