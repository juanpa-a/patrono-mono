import { useState } from "react";

type RadioItem = {
  value: string,
  text: string,
  id: string
}
type RadioProps = {
  label: string;
  radioItems: Array<RadioItem>
}

export default ({ label, radioItems }: RadioProps) => {
  const [val, setVal] = useState("")
  return <div className="p-4">
    <label 
      className="block mb-2 text-sm font-medium">
      {label}
    </label>

    {radioItems.map(item => {
      return <div className="flex items-center">
        <input 
          checked={val === item.value}
          id={item.id} 
          type="radio" 
          value={item.value} 
          className="w-4 h-4 mr-2 text-orange-600 bg-sand border-grain focus:ring-orange-500"
          onClick={() => setVal(item.value)}
        />
        <label 
          className="block text-sm font-medium">
          {item.text}
        </label>
      </div>
    })}
  </div>
}
