type InputProps = {
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => void;
  placeholder: string;
  name: string;
};

export const Input = ({ onChange, placeholder }: InputProps) => (
  <input
    name="name"
    onChange={onChange}
    type="text"
    placeholder={placeholder}
  />
);
