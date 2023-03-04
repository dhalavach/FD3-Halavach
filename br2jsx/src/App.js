function App() {
  const str = 'первый<br>второй<br/>третий<br />последний';
  const lineBreakRegex = new RegExp('<br ?/?>');
  const arr = str.split(lineBreakRegex);
  const parsedStringArray = [];
  arr.forEach((item) => {
    parsedStringArray.push(item);
    parsedStringArray.push(<br />);
  });
  return <div className='App'>{parsedStringArray}</div>;
}

export default App;
