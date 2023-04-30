import { ReactNode, useState } from "react";

export const Unit = ({ children }: { children: ReactNode }) => {
  const [clicked, setclicked] = useState(false);
  return (
    <button onClick={() => setclicked((prev) => !prev)}>
      {clicked ? "Clicked" : children}
    </button>
  );
};

export const UnitInput = ({
  placeholder,
  onChange,
}: {
  placeholder: string;
  onChange: any;
}) => {
  //   const [value, setValue] = useState("");
  return <input onChange={onChange} {...{ placeholder }} />;
};

// export const UnitInput = ({ placeholder }: { placeholder: string }) => {
//   return <input {...{ placeholder }} />;
// };
