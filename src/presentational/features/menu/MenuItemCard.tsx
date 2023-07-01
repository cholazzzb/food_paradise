import Link from 'next/link';

import { css } from '~/__generated__/panda-css/css';
import { MenuItem } from '~/domains/menu/entity';
import { Caption, Heading } from '~/presentational/components/Typography';

type MenuItemCardProps = {
  menu: MenuItem;
};

export default function MenuItemCard(props: MenuItemCardProps) {
  return (
    <Link href={`/menu/${props.menu.id}`}>
      <div
        className={css({
          display: 'flex',
          padding: '1rem 0.5rem',
        })}
      >
        <div
          className={css({
            backgroundColor: 'red',
            width: 60,
            height: 60,
          })}
        >
          Img
        </div>
        <div
          className={css({
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            marginInlineStart: '4xs',
          })}
        >
          <Heading>{props.menu.name}</Heading>
          <Caption size="2xs">{props.menu.price}</Caption>
        </div>
      </div>
    </Link>
  );
}
