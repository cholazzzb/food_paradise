import { PropsWithChildren } from 'react';

import {
  caption,
  heading,
  text,
  type CaptionVariant,
  type HeadingVariant,
  type TextVariant,
} from '~/__generated__/panda-css/recipes';

type HeadingProps = PropsWithChildren<Partial<HeadingVariant>>;
export function Heading(props: HeadingProps) {
  const { children, ...pandaProps } = props;

  return <h1 className={heading(pandaProps)}>{children}</h1>;
}

type TextProps = PropsWithChildren<Partial<TextVariant>>;
export function Text(props: TextProps) {
  const { children, ...pandaProps } = props;

  return <p className={text(pandaProps)}>{children}</p>;
}

type CaptionProps = PropsWithChildren<Partial<CaptionVariant>>;
export function Caption(props: CaptionProps) {
  const { children, ...pandaProps } = props;

  return <p className={caption(pandaProps)}>{children}</p>;
}
