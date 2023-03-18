import React from 'react';
import Controls from './Controls'
import List from './List'

export default function Filter(props: {data: string[]}) {
  
  const { data} = props
  return (
    <>
      <Controls />
      <List data={data} />
    </>
    )
}