'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IconsDelete } from '~/__generated__/assetsSVG';
import { Center, HStack, VStack } from '~/__generated__/panda-css/jsx';
import AppLayout, { Header } from '~/app/components/AppLayout';
import Button from '~/app/components/Button';
import { Caption, Heading } from '~/app/components/Typography';
import { localOrderAction, useAllLocalOrders } from '~/domains/order/store';

export default function Page() {
  const orders = useAllLocalOrders();

  return (
    <AppLayout>
      <Header title="Order" />
      <VStack flexGrow={1} padding="xs">
        <Heading size="xl">My Order</Heading>
        {orders.map((item) => {
          const onDeleteOrder = () => {
            localOrderAction.removeOrderItem({
              merchantID: item.merchantID,
              orderItemID: item.id,
              idx: item.idx,
            });
          };
          return (
            <HStack
              key={item.id}
              alignItems="start"
              width="100%"
              justifyContent="space-between"
            >
              <Center
                backgroundColor="hit"
                width="7xs"
                height="7xs"
                borderRadius="xs"
                color="gohan"
              >
                x{item.quantity}
              </Center>

              <VStack alignItems="self-start" width="100%">
                <Heading>{item.name}</Heading>
                {item.modifiers.map((mod) => (
                  <Caption key={mod.id}>{mod.name}</Caption>
                ))}
                <Caption>{item.price}adads</Caption>
                <Caption>Edit</Caption>
              </VStack>

              <VStack height="100%" width="xl" justifyContent="space-between">
                <Image
                  src={item.imageURL}
                  alt="menu-image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
                <IconsDelete onClick={onDeleteOrder} />
              </VStack>
            </HStack>
          );
        })}
      </VStack>
      <HStack
        paddingBlock="4xs"
        paddingInline="xs"
        justifyContent="space-between"
      >
        <Link href="/">
          <Button visual="secondary">+ Menu</Button>
        </Link>
        <Button>Order</Button>
      </HStack>
    </AppLayout>
  );
}
