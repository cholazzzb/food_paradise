import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

import {
  caption,
  heading,
  text,
  type CaptionVariant,
  type HeadingVariant,
  type TextVariant,
} from '~/__generated__/panda-css/recipes';

type HeadingProps = PropsWithChildren<Partial<HeadingVariant>> &
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
export function Heading(props: HeadingProps) {
  const { children, size, ...elementProps } = props;

  return (
    <h1 className={heading({ size })} {...elementProps}>
      {children}
    </h1>
  );
}

type TextProps = PropsWithChildren<Partial<TextVariant>> &
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
export function Text(props: TextProps) {
  const { children, ...elementProps } = props;

  return (
    <p className={text()} {...elementProps}>
      {children}
    </p>
  );
}

type CaptionProps = PropsWithChildren<Partial<CaptionVariant>> &
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
export function Caption(props: CaptionProps) {
  const { children, size, ...elementProps } = props;

  return (
    <p className={caption({ size })} {...elementProps}>
      {children}
    </p>
  );
}
