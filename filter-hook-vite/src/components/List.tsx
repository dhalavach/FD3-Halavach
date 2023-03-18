export default function List(props: { items: string[] }) {
  const { items } = props;

  return (
    <section className='item-list'>
      <div id='item-list'>
        <ol>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
