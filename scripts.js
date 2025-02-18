const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
  ];
  
  const itemList = items.map(item => (
    <li key={item.id}>{item.name}</li>
  ));
  
  return (
    <ul>
      {itemList}
    </ul>
  );
//React example with map
    