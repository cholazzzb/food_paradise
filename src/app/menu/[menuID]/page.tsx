'use client';

import Image from 'next/image';

import { IconsMinus, IconsPlus } from '~/__generated__/assetsSVG';
import { HStack, VStack } from '~/__generated__/panda-css/jsx';
import { AvailableStatus } from '~/domains/menu/entity';
import { useMenuItem } from '~/domains/menu/hook';
import AppLayout from '~/presentational/AppLayout';
import Button from '~/presentational/components/Button';
import { Caption, Heading, Text } from '~/presentational/components/Typography';

export default function MenuItemPage({
  params,
}: {
  params: { menuID: string };
}) {
  const { menuID } = params;
  const { menuItem, isError } = useMenuItem(menuID);

  if (isError || !menuItem) {
    return <>Sorry, menu not found</>;
  }

  const imageUrl = (menuItem?.photos && menuItem.photos[0]) ?? '';

  return (
    <AppLayout>
      <VStack flexGrow={1} position="relative">
        <Image
          src={imageUrl}
          alt="food-image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          priority
        />

        <VStack
          borderTopRadius="md"
          marginTop="-xs"
          width="100%"
          backgroundColor="white"
        >
          <Heading>{menuItem.name}</Heading>
          {menuItem.description && <Text>{menuItem.description}</Text>}
          <Caption>{menuItem.price}</Caption>
        </VStack>
        {menuItem.modifierGroups.map((modGrp) => {
          const isRequired = modGrp.selectionRangeMin === 1;
          const subTitle = isRequired
            ? 'Wajib Pilih 1'
            : 'Opsional - Boleh pilih semua';

          return (
            <VStack
              key={modGrp.id}
              alignItems="flex-start"
              width="100%"
              px="xs"
            >
              <Heading size="xl">{modGrp.name}</Heading>
              <Text>{subTitle}</Text>
              <VStack alignItems="flex-start" width="100%">
                {modGrp.modifiers.map((mod) => (
                  <HStack
                    key={mod.id}
                    width="100%"
                    justifyContent="space-between"
                  >
                    {isRequired ? (
                      <input
                        type="radio"
                        disabled={
                          mod.availableStatus === AvailableStatus.UNAVAILABLE
                        }
                      />
                    ) : (
                      <input type="checkbox" />
                    )}
                    <Caption>{mod.name}</Caption>
                    <Caption>+{mod.price}</Caption>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          );
        })}
      </VStack>
      <HStack justifyContent="space-between">
        <HStack>
          <IconsMinus />
          <Text>1</Text>
          <IconsPlus />
        </HStack>
        <Button>Add Item</Button>
      </HStack>
    </AppLayout>
  );
}
