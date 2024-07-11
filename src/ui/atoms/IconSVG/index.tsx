import { ReactElement } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';

import { cn } from '../../../utils/helpers/tailwindMerge';
import { Close, Edit, New, Reset, RightArrow, Search, Delete } from '../Icons';
type ReactIconsName =
  | 'dropDown'
  | 'dropUp'
  | 'reset'
  | 'rightArrow'
  | 'search'
  | 'delete'
  | 'new'
  | 'edit'
  | 'close';

interface Props {
  name: ReactIconsName;
  current?: boolean;
  size?: number;
  iconColor?: string;
  activeColor?: string;
  hoverColor?: string;
  iconClassName?: string;
}

const IconSvg = ({
  name,
  current,
  size = 6,
  iconColor,
  activeColor = 'white',
  hoverColor = 'white',
  iconClassName,
}: Props): ReactElement => {
  const iconStyle = cn(
    current && !iconColor
      ? `text-${activeColor}-00`
      : `text-${iconColor}-300 group-hover:text-${hoverColor}-50`,
    iconClassName,
  );

  const Icons = {
    dropDown: <HiOutlineChevronDown className={iconStyle} size={size} aria-hidden="true" />,
    dropUp: <HiOutlineChevronUp className={iconStyle} size={size} aria-hidden="true" />,
    reset: <Reset className={iconStyle} color={iconColor} size={size} aria-hidden="true" />,
    rightArrow: (
      <RightArrow className={iconStyle} color={iconColor} size={size} aria-hidden="true" />
    ),
    search: <Search className={iconStyle} color={iconColor} size={size} aria-hidden="true" />,
    new: <New className={iconStyle} color={iconColor} size={size} aria-hidden="true" />,
    edit: <Edit className={iconStyle} color={iconColor} size={size} aria-hidden="true" />,
    delete: <Delete className={iconStyle} size={size} aria-hidden="true" />,
    close: <Close className={iconStyle} color={iconColor} size={size} aria-hidden="true" />,
  };
  return Icons[name];
};

export default IconSvg;
export type { ReactIconsName };
