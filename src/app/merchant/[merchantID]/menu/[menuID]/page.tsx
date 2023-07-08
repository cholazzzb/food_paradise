'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo, useState, type ChangeEvent } from 'react';

import { IconsMinus, IconsPlus } from '~/__generated__/assetsSVG';
import { HStack, VStack } from '~/__generated__/panda-css/jsx';
import AppLayout from '~/app/components/AppLayout';
import Button from '~/app/components/Button';
import { Caption, Heading, Text } from '~/app/components/Typography';
import {
  AvailableStatus,
  Modifier,
  ModifierGroup,
} from '~/domains/menu/entity';
import { useMenuItem } from '~/domains/menu/hook';
import { localOrderAction } from '~/domains/order/store';
import { generateRandomID } from '~/shared/random';

export default function Page({
  params,
}: {
  params: { merchantID: string; menuID: string };
}) {
  const router = useRouter();
  const { merchantID, menuID } = params;
  const { menuItem, isError } = useMenuItem(menuID);

  const orderItem = useMemo(
    () => ({
      id: menuID,
      grabItemID: menuID,
      quantity: 1,
      price: menuItem?.price ?? 0,
      tax: 0,
      specifications: '',
      modifiers: [],
    }),
    [],
  );

  const [selectedMenu, setSelectedMenu] = useState({
    quantity: 0,
    specifications: '',
    modifier: {
      multiSelect: new Map<
        Modifier['id'],
        { id: Modifier['id']; name: string; price: number }
      >(),
      singleSelect: new Map<
        ModifierGroup['id'],
        { id: Modifier['id']; name: string; price: number }
      >(),
    },
  });

  const createToggleModifierHandler = useCallback(
    (
      type: 'radio' | 'checkbox',
      modGrpId: ModifierGroup['id'],
      mod: Modifier,
    ) => {
      const handler = (e: ChangeEvent<HTMLInputElement>) => {
        switch (type) {
          case 'radio':
            {
              setSelectedMenu((prev) => {
                const nextState = { ...prev };
                nextState.modifier.singleSelect = new Map();
                nextState.modifier.singleSelect.set(modGrpId, {
                  id: mod.id,
                  name: mod.name,
                  price: mod.price,
                });

                return nextState;
              });
            }
            break;
          case 'checkbox':
            {
              if (e.target.checked) {
                setSelectedMenu((prev) => {
                  const nextState = { ...prev };
                  nextState.modifier.multiSelect.set(mod.id, {
                    id: mod.id,
                    name: mod.name,
                    price: mod.price,
                  });
                  return nextState;
                });
              } else {
                setSelectedMenu((prev) => {
                  const nextState = { ...prev };
                  nextState.modifier.multiSelect.delete(mod.id);
                  return nextState;
                });
              }
            }
            break;
        }
      };
      return handler;
    },
    [],
  );

  const onDecreaseQuantity = useCallback(() => {
    setSelectedMenu((prev) => {
      if (prev.quantity === 0) {
        return prev;
      }
      return {
        ...prev,
        quantity: prev.quantity - 1,
      };
    });
  }, []);

  const onIncreaseQuantity = useCallback(() => {
    setSelectedMenu((prev) => ({
      ...prev,
      quantity: prev.quantity + 1,
    }));
  }, []);

  const onEditSpecification = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSelectedMenu((prev) => ({ ...prev, specifications: e.target.value }));
    },
    [],
  );

  const onSave = useCallback(() => {
    localOrderAction.addOrderItem({
      merchantID,
      localOrderItem: {
        id: generateRandomID(),
        grabItemID: generateRandomID(),
        name: menuItem?.name ?? '',
        imageURL: menuItem?.photos ? menuItem?.photos[0] : '',
        quantity: selectedMenu.quantity,
        price: orderItem.price,
        tax: 0,
        specifications: selectedMenu.specifications,
        modifiers: [
          ...selectedMenu.modifier.singleSelect.values(),
          ...selectedMenu.modifier.multiSelect.values(),
        ].map((mod) => ({ ...mod, tax: 0, quantity: 1 })),
      },
    });

    router.push('/');
  }, [selectedMenu]);

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
                {modGrp.modifiers.map((mod) => {
                  const disabled =
                    mod.availableStatus === AvailableStatus.UNAVAILABLE;

                  const inputType = isRequired ? 'radio' : 'checkbox';
                  const checked = (() => {
                    switch (inputType) {
                      case 'radio': {
                        return (
                          selectedMenu.modifier.singleSelect.get(modGrp.id)
                            ?.id === mod.id
                        );
                      }

                      case 'checkbox': {
                        return selectedMenu.modifier.multiSelect.has(mod.id);
                      }
                    }
                  })();

                  const onClickModifiier = createToggleModifierHandler(
                    inputType,
                    modGrp.id,
                    mod,
                  );

                  return (
                    <HStack
                      key={mod.id}
                      width="100%"
                      justifyContent="space-between"
                    >
                      <input
                        type={inputType}
                        checked={checked}
                        disabled={disabled}
                        onChange={onClickModifiier}
                      />
                      <Caption>{mod.name}</Caption>
                      {mod.price && <Caption>+{mod.price}</Caption>}
                    </HStack>
                  );
                })}
              </VStack>
            </VStack>
          );
        })}
        <input
          value={selectedMenu.specifications}
          onChange={onEditSpecification}
        />
      </VStack>
      <HStack justifyContent="space-between">
        <HStack>
          <IconsMinus onClick={onDecreaseQuantity} />
          <Text>{selectedMenu.quantity}</Text>
          <IconsPlus onClick={onIncreaseQuantity} />
        </HStack>
        <Button onClick={onSave} disabled={selectedMenu.quantity <= 0}>
          Add Item
        </Button>
      </HStack>
    </AppLayout>
  );
}
