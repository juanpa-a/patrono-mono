type Props = {
  text: string;
  label: string;
  options: Array<{ text: string; value: string }>;
  onChange: (s: any) => void;
};

export const SelectField = ({ label, options, onChange, text }: Props) => {
  return (
    <div className="my-4">
      <label
        htmlFor={label}
        className="mb-2 block text-sm font-medium text-gray-900"
      >
        <strong>{text}</strong>
      </label>
      <select
        id="countries"
        name={label}
        className="block w-full rounded-lg border border-gray-300 bg-sand p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        onChange={onChange}
      >
        <option selected>Seleccionar</option>
        {options.map(({ value, text }) => {
          return (
            <option className="p-1" key={value} value={value}>
              {text}
            </option>
          );
        })}
      </select>
    </div>
  );
};
