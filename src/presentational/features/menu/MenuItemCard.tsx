import Image from 'next/image';
import Link from 'next/link';

import { css } from '~/__generated__/panda-css/css';
import { MenuItem } from '~/domains/menu/entity';
import { Caption, Heading } from '~/presentational/components/Typography';

type MenuItemCardProps = {
  merchantID: string;
  menu: MenuItem;
};

export default function MenuItemCard(props: MenuItemCardProps) {
  const imageUrl = (props.menu?.photos && props.menu.photos[0]) ?? '';
  return (
    <Link href={`/merchant/${props.merchantID}/menu/${props.menu.id}`}>
      <div
        className={css({
          display: 'flex',
          py: 'xs',
        })}
      >
        <div
          className={css({
            width: 80,
            height: 80,
            backgroundColor: 'white',
          })}
        >
          <Image
            className={css({ borderRadius: 'lg' })}
            src={imageUrl}
            alt="food-image"
            width={100}
            height={100}
          />
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
