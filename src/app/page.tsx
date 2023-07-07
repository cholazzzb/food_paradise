'use client';

import { GroupedVirtuoso, Virtuoso } from 'react-virtuoso';

import { css } from '~/__generated__/panda-css/css';
import { HStack, VStack } from '~/__generated__/panda-css/jsx';
import { useGroupMenu, useMerchantsList } from '~/domains/menu/hook';
import AppLayout, { Header } from '~/presentational/AppLayout';
import CategoryGroupContent from '~/presentational/features/menu/CategoryGroupContent';
import CategoryGroupHeader from '~/presentational/features/menu/CategoryGroupHeader';
import MenuItemCard from '~/presentational/features/menu/MenuItemCard';
import MerchantItem from '~/presentational/features/menu/MerchantItem';

export default function Home() {
  const { merchants } = useMerchantsList();
  const { groupedMenu, selectedMerchant, createOnClickHandler } =
    useGroupMenu();

  return (
    <AppLayout>
      <Header title="Menu" />
      <VStack
        className={css({
          flexGrow: 1,
        })}
        gap={0}
      >
        <HStack
          className={css({
            width: '100%',
            height: '100%',
          })}
        >
          <Virtuoso
            className={css({
              height: '100%',
              width: 80,
              borderRight: 'default',
              borderColor: 'hit',
            })}
            data={merchants}
            itemContent={(_, merchant) => (
              <MerchantItem
                merchant={merchant}
                createOnClickHandler={createOnClickHandler}
              />
            )}
          />
          {groupedMenu && (
            <GroupedVirtuoso
              className={css({ height: '100%', width: '100%' })}
              data={groupedMenu?.allMenus}
              components={{
                Header: () => (
                  <CategoryGroupHeader
                    merchantName={selectedMerchant?.name ?? ''}
                  />
                ),
              }}
              groupCounts={groupedMenu?.categoryMenuCount}
              groupContent={(index) => {
                const firstIndex = index === 0;
                const categoryName = groupedMenu?.categoryNames[index];
                return (
                  <CategoryGroupContent
                    firstIndex={firstIndex}
                    categoryName={categoryName}
                  />
                );
              }}
              itemContent={(_idx, grpIdx, menu) => (
                <MenuItemCard
                  merchantID={merchants[grpIdx].merchantID}
                  menu={menu}
                />
              )}
            />
          )}
        </HStack>
      </VStack>
    </AppLayout>
  );
}
