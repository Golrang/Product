import { useState } from 'react';

export const SaySmart = () => {
  const [test, settest] = useState(0);
  settest(10);
  console.log(test);
  return <div>SaySmart</div>;
};

export type Message = {
  name: string;
  age: number;
};
