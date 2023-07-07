import { css } from '~/__generated__/panda-css/css';
import { Heading } from '~/app/components/Typography';

type CategoryGroupContentProps = {
  firstIndex: boolean;
  categoryName: string;
};

export default function CategoryGroupContent(props: CategoryGroupContentProps) {
  return (
    <div
      className={css({
        backgroundColor: 'white',
        borderTop: !props.firstIndex ? 'default' : '',
        borderColor: !props.firstIndex ? 'krillin100' : 'goten',
        marginInline: '4xs',
      })}
    >
      <Heading size="xl">{props.categoryName}</Heading>
    </div>
  );
}
