export default function Br2jsx(props) {
  const lineBreakRegex = new RegExp('<br ?/?>');
  const parsedStringArray = props.htmlString.split(lineBreakRegex);
  const JSXArray = [];

  parsedStringArray.forEach((e, i) => {
    console.log(e, i);
    if (i) JSXArray.push(<br key={i} />);
    JSXArray.push(e);
  });

  return <div className='App'>{JSXArray}</div>;
}
