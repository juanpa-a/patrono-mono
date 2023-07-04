type TextFieldProps = {
  text: string;
  label: string;
  placeholer?: string;
  isPassword?: boolean;
  setValue: Function;
};

export const TextField = ({
  text,
  label,
  placeholer,
  isPassword = false,
  setValue,
}: TextFieldProps) => {
  return (
    <div className="my-8 w-full">
      <label className="mb-2 block text-sm font-medium">
        <strong>{text}</strong>
      </label>
      <input
        name={label}
        type={isPassword ? "password" : "text"}
        className="w-full rounded-lg border-2 border-grain bg-sand p-2"
        placeholder={placeholer}
        onChange={setValue}
      />
    </div>
  );
};
