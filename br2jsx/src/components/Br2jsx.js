export default function Br2jsx() {
  const str = 'первый<br>второй<br/>третий<br />последний';
  const lineBreakRegex = new RegExp('<br ?/?>');
  const arr = str.split(lineBreakRegex);
  const parsedStringArray = [];

  for (let i = 0; i <= arr.length - 2; i++) {
    parsedStringArray.push(arr[i]);
    parsedStringArray.push(<br />);
  }
  parsedStringArray.push(arr[arr.length - 1]);

  return <div className='App'>{parsedStringArray}</div>;
}
