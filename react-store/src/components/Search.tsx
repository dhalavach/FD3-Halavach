import React from 'react'

export default function Search(props: any) {

  const { searchQuery, searchProducts } = props;
  return (
    <div>Search <input
      name="search"
      id='search-box'
      type="search"
      placeholder="search products"
    value={searchQuery}
    onChange={searchProducts}
  /></div>
  )
}
