import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  error?: string;
}

const Input = ({ placeholder, type = 'text', label, error, ...rest }: Props) => {
  return (
    <div>
      <label className="text-gray-900 block text-left text-sm font-medium leading-6">{label}</label>
      <div className="mt-2">
        <input
          placeholder={placeholder}
          type={type}
          className="text-gray-900 placeholder:text-gray-400 focus:ring-indigo-600 block w-full rounded-md border-0 py-1.5 pl-4 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          {...rest}
        />
      </div>
      <div style={{ color: 'red' }}>{error}</div>
    </div>
  );
};

export default Input;
