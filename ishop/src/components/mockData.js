const data = {
  heading: 'Super-Duper Computer Store',
  theadData: ['Name', 'Price', 'Photo', 'Quantity'],

  tbodyData: [
    {
      id: '1',
      className: 'Item',
      items: [
        'ASUS ROG STRIX B550-I GAMING',
        730,
        <img
          src='https://uni.by/files/ItemsImages/116378_r300.jpg'
          alt='ASUS B550-I'
        />,
        '2',
      ],
    },
    {
      id: '2',
      className: 'Item',

      items: [
        'ASUS PRIME Z790-P D4',
        820,
        <img
          src='https://uni.by/files/ItemsImages/135354_r300.jpg'
          alt='Asus Z790 Prime'
        />,
        1,
      ],
    },
    {
      id: '3',
      className: 'Item',

      items: [
        'MSI MPG B650 Edge WiFi',
        1095,
        <img
          src='https://uni.by/files/ItemsImages/137010_r300.jpg'
          alt='MSI B650 Edge'
        />,
        0,
      ],
    },
  ],
};

export default data;
