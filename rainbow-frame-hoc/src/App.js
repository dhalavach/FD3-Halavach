import './App.css';
import DoubleButton from './components/DoubleButton';
import withRainbowFrame from './components/withRainbowFrame';

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

  const FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);

  return (
    <div>
      <FramedDoubleButton
        caption1='caption1 goes here'
        caption2={'caption2 goes here'}
        cbPressed={(e) => alert(e.target.value)}
      ></FramedDoubleButton>
    </div>
  );
}

export default App;
