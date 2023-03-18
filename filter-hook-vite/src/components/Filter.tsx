import { useState, useEffect } from 'react';
import Controls from './Controls';
import List from './List';

export default function Filter(props: { data: string[] }) {
  const { data } = props;

  const [items, setItems] = useState(data);
  const [isSorted, setIsSorted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (query: string) => {
    setSearchQuery(query);
  };

  const handleChange = (checked: Boolean) => {
    setIsSorted(Boolean(checked));
  };

  const handleReset = () => {
    setIsSorted(false);
    setSearchQuery('');
  };

  const sortList = (arr: string[]) => {
    const collator = new Intl.Collator('en', {
      numeric: true,
      sensitivity: 'base',
    });
    return arr.sort((a: string, b: string) => {
      return collator.compare(a, b);
    });
  };

  useEffect(() => {
    let arr = [...data];
    if (searchQuery) {
      arr = arr.filter((item) => {
        return item.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }
    if (isSorted) sortList(arr);
    setItems(arr);
  }, [isSorted, searchQuery]);

  return (
    <>
      <Controls
        searchQuery={searchQuery}
        isSorted={isSorted}
        handleSearchQuery={handleSearchQuery}
        handleChange={handleChange}
        handleReset={handleReset}
      />
      <List items={items} />
    </>
  );
}
