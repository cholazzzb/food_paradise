import { css } from '~/__generated__/panda-css/css';
import { Heading } from '~/presentational/components/Typography';

type CategoryGroupHeaderProps = {
  merchantName: string;
};
export default function CategoryGroupHeader(props: CategoryGroupHeaderProps) {
  return (
    <div
      className={css({
        height: '6xs',
      })}
    >
      <Heading size="xl">{props.merchantName}</Heading>
    </div>
  );
}
