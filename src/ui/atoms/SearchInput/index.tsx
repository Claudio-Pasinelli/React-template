import { InputHTMLAttributes } from 'react';
import { cn } from '../../../utils/helpers/tailwindMerge';
import IconSvg from '../IconSVG';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerClassName?: string;
  error?: string | null;
}

export default function SearchInput({ name, containerClassName, error, ...rest }: Props) {
  return (
    <section
      className={cn(
        'flex h-10 w-80 items-center rounded-3xl border border-gray-300 bg-white shadow-xl',
        containerClassName,
      )}>
      <input
        id={name}
        className={cn(
          'h-full min-w-[25%] max-w-full flex-grow rounded-l-3xl bg-white p-2 text-center placeholder:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300',
        )}
        placeholder="Cerca"
        {...rest}
        type="text"
      />
      <IconSvg name="search" size={24} iconClassName="w-[12%]" />
      {error && (
        <div className="mt-2 w-full">
          <p className="text-red-100-600 border border-gray-200 text-center text-xs">{error}</p>
        </div>
      )}
    </section>
  );
}
