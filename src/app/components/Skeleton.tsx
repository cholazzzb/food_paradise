'use client';

import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { css } from '~/__generated__/panda-css/css';

type SkeletonProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  width?: number;
  height?: number;
};

export default function Skeleton(props: SkeletonProps) {
  const { width = 500, height = 500, ...defaultProps } = props;
  return (
    <div
      className={css({
        height,
        width,
        animation: 'skeleton 1s linear infinite alternate',
        color: 'transparent',
      })}
      {...defaultProps}
    >
      .
    </div>
  );
}
