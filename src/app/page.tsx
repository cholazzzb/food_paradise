import AppLayout from '~/presentational/AppLayout';
import Button from '~/presentational/components/Button';
import { Caption, Heading, Text } from '~/presentational/components/Typography';

export default function Home() {
  return (
    <AppLayout>
      Hello 🐼!
      <Button visual="primary" size="xs">
        child
      </Button>
      <Button visual="secondary" size="sm">
        child
      </Button>
      <Button visual="stroke" size="md">
        child
      </Button>
      <Button visual="ghost" size="lg">
        child
      </Button>
      <Heading size="7xl">H1</Heading>
      <Text>Text</Text>
      <Caption>Caption</Caption>
    </AppLayout>
  );
}
