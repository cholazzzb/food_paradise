import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
  ReactNode,
} from 'react';

import { button, type ButtonVariant } from '~/__generated__/panda-css/recipes';

type Props = PropsWithChildren<Partial<ButtonVariant>> & {
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
} & DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
export default function Button(props: Props) {
  const {
    loading: _loading,
    leftIcon: _leftIcon,
    rightIcon: _rightIcon,
    children,
    visual,
    size,
    shape,
    ...elementProps
  } = props;

  return (
    <button className={button({ visual, size, shape })} {...elementProps}>
      {children}
    </button>
  );
}
