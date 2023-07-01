import Image from 'next/image';

import { css } from '~/__generated__/panda-css/css';
import { Merchant } from '~/domains/menu/entity';

type MerchantItemProps = {
  merchant: Merchant;
  createOnClickHandler: (merchant: Merchant) => () => void;
};

export default function MerchantItem(props: MerchantItemProps) {
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBlock: 'xs',
        cursor: 'pointer',
      })}
      onClick={props.createOnClickHandler(props.merchant)}
    >
      <Image
        src={props.merchant.imageURL}
        width={40}
        height={40}
        alt={`merchant-${props.merchant.name}`}
      />
    </div>
  );
}
