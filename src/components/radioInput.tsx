import { useState } from "react";

type RadioItem = {
  value: string;
  text: string;
  id: string;
};
type RadioProps = {
  label: string;
  radioItems: Array<RadioItem>;
};

export const Radio = ({ label, radioItems }: RadioProps) => {
  const [val, setVal] = useState("");
  return (
    <div className="p-4">
      <label className="mb-2 block text-sm font-medium">{label}</label>

      {radioItems.map((item, i) => {
        return (
          <div className="flex items-center" key={`radio-${label}-${i}`}>
            <input
              checked={val === item.value}
              id={item.id}
              type="radio"
              value={item.value}
              className="mr-2 h-4 w-4 border-grain bg-sand text-orange-600 focus:ring-orange-500"
              onClick={() => setVal(item.value)}
            />
            <label className="block text-sm font-medium">{item.text}</label>
          </div>
        );
      })}
    </div>
  );
};
