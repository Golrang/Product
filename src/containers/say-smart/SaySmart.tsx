import { useState } from 'react';

export const SaySmart = () => {
  const [test] = useState();
  console.log(test);
  return <div>SaySmart</div>;
};

export type Message = {
  name: string;
  age: number;
};
