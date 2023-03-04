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
  return <RainbowFrame colors={colors} />;
}

export default App;
