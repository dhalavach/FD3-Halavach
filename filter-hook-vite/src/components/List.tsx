const List = (props: { items: (string | number)[] }) => {
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
};

export default List;
