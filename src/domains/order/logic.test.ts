import { describe, expect, it } from 'vitest';

import { addOneItem, removeOneItem } from './logic';
import { LocalOrder } from './store';

describe('test addOneItem', () => {
  it('no merchant in the store', () => {
    const result = addOneItem(
      {},
      {
        merchantID: '1',
        localOrderItem: {
          id: 'oi1',
          grabItemID: '1',
          name: '1',
          imageURL: '',
          quantity: 1,
          price: 1000,
          tax: 0,
          specifications: '',
          modifiers: [],
        },
      },
    );

    const expected: LocalOrder['orders'] = {
      '1': {
        merchantID: '1',
        partnerMerchantID: '1',
        items: {
          oi1: [
            {
              id: 'oi1',
              grabItemID: '1',
              name: '1',
              imageURL: '',
              quantity: 1,
              price: 1000,
              tax: 0,
              specifications: '',
              modifiers: [],
            },
          ],
        },
        price: {
          subtotal: 1000,
          tax: 0,
          merchantChargeFee: 0,
          grabFundPromo: 0,
          merchantFundPromo: 0,
          basketPromo: 0,
          deliveryFee: 0,
          eaterPayment: 0,
        },
      },
    };

    expect(result).toStrictEqual(expected);
  });

  it('merchant exist but order not exist', () => {
    const result = addOneItem(
      {
        '1': {
          merchantID: '1',
          partnerMerchantID: '1',
          items: {
            oi1: [
              {
                id: 'oi1',
                grabItemID: '1',
                name: '1',
                imageURL: '',
                quantity: 1,
                price: 1000,
                tax: 0,
                specifications: '',
                modifiers: [],
              },
            ],
          },
          price: {
            subtotal: 1000,
            tax: 0,
            merchantChargeFee: 0,
            grabFundPromo: 0,
            merchantFundPromo: 0,
            basketPromo: 0,
            deliveryFee: 0,
            eaterPayment: 0,
          },
        },
      },
      {
        merchantID: '1',
        localOrderItem: {
          id: 'oi2',
          grabItemID: '2',
          name: '2',
          imageURL: '',
          quantity: 1,
          price: 1000,
          tax: 0,
          specifications: '',
          modifiers: [],
        },
      },
    );

    const expected: LocalOrder['orders'] = {
      '1': {
        merchantID: '1',
        partnerMerchantID: '1',
        items: {
          oi1: [
            {
              id: 'oi1',
              name: '1',
              imageURL: '',
              grabItemID: '1',
              quantity: 1,
              price: 1000,
              tax: 0,
              specifications: '',
              modifiers: [],
            },
          ],
          oi2: [
            {
              id: 'oi2',
              grabItemID: '2',
              name: '2',
              imageURL: '',
              quantity: 1,
              price: 1000,
              tax: 0,
              specifications: '',
              modifiers: [],
            },
          ],
        },
        price: {
          subtotal: 1000,
          tax: 0,
          merchantChargeFee: 0,
          grabFundPromo: 0,
          merchantFundPromo: 0,
          basketPromo: 0,
          deliveryFee: 0,
          eaterPayment: 0,
        },
      },
    };

    expect(result).toStrictEqual(expected);
  });

  it('merchant exist and order exist', () => {
    const result = addOneItem(
      {
        '1': {
          merchantID: '1',
          partnerMerchantID: '1',
          items: {
            oi1: [
              {
                id: 'oi1',
                grabItemID: '1',
                name: '1',
                imageURL: '',
                quantity: 1,
                price: 1000,
                tax: 0,
                specifications: '',
                modifiers: [],
              },
            ],
          },
          price: {
            subtotal: 1000,
            tax: 0,
            merchantChargeFee: 0,
            grabFundPromo: 0,
            merchantFundPromo: 0,
            basketPromo: 0,
            deliveryFee: 0,
            eaterPayment: 0,
          },
        },
      },
      {
        merchantID: '1',
        localOrderItem: {
          id: 'oi1',
          grabItemID: '1',
          name: '1',
          imageURL: '',
          quantity: 1,
          price: 1000,
          tax: 0,
          specifications: '',
          modifiers: [],
        },
      },
    );

    const expected: LocalOrder['orders'] = {
      '1': {
        merchantID: '1',
        partnerMerchantID: '1',
        items: {
          oi1: [
            {
              id: 'oi1',
              grabItemID: '1',
              name: '1',
              imageURL: '',
              quantity: 1,
              price: 1000,
              tax: 0,
              specifications: '',
              modifiers: [],
            },
            {
              id: 'oi1',
              grabItemID: '1',
              name: '1',
              imageURL: '',
              quantity: 1,
              price: 1000,
              tax: 0,
              specifications: '',
              modifiers: [],
            },
          ],
        },
        price: {
          subtotal: 1000,
          tax: 0,
          merchantChargeFee: 0,
          grabFundPromo: 0,
          merchantFundPromo: 0,
          basketPromo: 0,
          deliveryFee: 0,
          eaterPayment: 0,
        },
      },
    };

    expect(result).toStrictEqual(expected);
  });
});

describe('test removeOneItem', () => {
  it('remove order that is more than 1', () => {
    const result = removeOneItem(
      {
        '1': {
          merchantID: '1',
          partnerMerchantID: '1',
          items: {
            oi1: [
              {
                id: 'oi1',
                grabItemID: '1',
                name: '1',
                imageURL: '',
                quantity: 1,
                price: 1000,
                tax: 0,
                specifications: '',
                modifiers: [],
              },
              {
                id: 'oi1',
                grabItemID: '1',
                name: '1',
                imageURL: '',
                quantity: 2,
                price: 1000,
                tax: 0,
                specifications: '',
                modifiers: [],
              },
            ],
          },
          price: {
            subtotal: 1000,
            tax: 0,
            merchantChargeFee: 0,
            grabFundPromo: 0,
            merchantFundPromo: 0,
            basketPromo: 0,
            deliveryFee: 0,
            eaterPayment: 0,
          },
        },
      },
      {
        merchantID: '1',
        orderItemID: 'oi1',
        idx: 0,
      },
    );

    const expected: LocalOrder['orders'] = {
      '1': {
        merchantID: '1',
        partnerMerchantID: '1',
        items: {
          oi1: [
            {
              id: 'oi1',
              grabItemID: '1',
              name: '1',
              imageURL: '',
              quantity: 2,
              price: 1000,
              tax: 0,
              specifications: '',
              modifiers: [],
            },
          ],
        },
        price: {
          subtotal: 1000,
          tax: 0,
          merchantChargeFee: 0,
          grabFundPromo: 0,
          merchantFundPromo: 0,
          basketPromo: 0,
          deliveryFee: 0,
          eaterPayment: 0,
        },
      },
    };

    expect(result).toStrictEqual(expected);

    const result2 = removeOneItem(
      {
        '1': {
          merchantID: '1',
          partnerMerchantID: '1',
          items: {
            oi1: [
              {
                id: 'oi1',
                grabItemID: '1',
                name: '1',
                imageURL: '',
                quantity: 1,
                price: 1000,
                tax: 0,
                specifications: '',
                modifiers: [],
              },
              {
                id: 'oi1',
                grabItemID: '1',
                name: '1',
                imageURL: '',
                quantity: 2,
                price: 1000,
                tax: 0,
                specifications: '',
                modifiers: [],
              },
            ],
          },
          price: {
            subtotal: 1000,
            tax: 0,
            merchantChargeFee: 0,
            grabFundPromo: 0,
            merchantFundPromo: 0,
            basketPromo: 0,
            deliveryFee: 0,
            eaterPayment: 0,
          },
        },
      },
      {
        merchantID: '1',
        orderItemID: 'oi1',
        idx: 1,
      },
    );

    const expected2: LocalOrder['orders'] = {
      '1': {
        merchantID: '1',
        partnerMerchantID: '1',
        items: {
          oi1: [
            {
              id: 'oi1',
              grabItemID: '1',
              name: '1',
              imageURL: '',
              quantity: 1,
              price: 1000,
              tax: 0,
              specifications: '',
              modifiers: [],
            },
          ],
        },
        price: {
          subtotal: 1000,
          tax: 0,
          merchantChargeFee: 0,
          grabFundPromo: 0,
          merchantFundPromo: 0,
          basketPromo: 0,
          deliveryFee: 0,
          eaterPayment: 0,
        },
      },
    };
    expect(result2).toStrictEqual(expected2);
  });

  it('remove order that is 1 and the only order in the merchant', () => {
    // TODO:
  });

  it('remove order that is 1 and is not only order in the mercahnt', () => {
    // TODO:
  });
});
