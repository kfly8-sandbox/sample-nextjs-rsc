"use client";

import { useState } from 'react';
import { Button } from './button';

export function Counter() {
  const [ count, setCount ] = useState(0);

  return (
    <>
      <Button label="click me" onClick={() => setCount(count + 1)} />
      count: {count}
    </>
  )
}
