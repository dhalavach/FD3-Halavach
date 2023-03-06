import Br2jsx from './components/Br2jsx';
function App() {
  const str = 'первый<br>второй<br/>третий<br />последний';

  return <Br2jsx htmlString={str} />;
}

export default App;
