// Ref: https://developer.grab.com/docs/grabfood/api/v1-1-3#tag/get-menu/operation/get-menu

export type Nullable<T> = T | null;

export enum CurrencyCode {
  IDR = 'IDR',
  MYR = 'MYR',
  PHP = 'PHP',
  SGD = 'SGD',
  THB = 'THB',
  VND = 'VND',
}
export enum CurrencySymbol {
  'Rp' = 'Rp',
  'RM' = 'RM',
  '₱' = '₱',
  'S$' = 'S$',
  '฿' = '฿',
  '₫' = '₫',
}
export type Currency = {
  code: CurrencyCode;
  symbol: CurrencySymbol;
  exponent: number;
};

export enum OpenPeriodType {
  'OpenPeriod' = 'OpenPeriod', // (open only in given periods)
  'OpenAllDay' = 'OpenAllDay', // (open 24 hours)
  'CloseAllDay' = 'CloseAllDay', // (closed 24 hours)
}
export type Period = {
  startTime: string; // '11:30'
  endTime: string; // '14:00'
};
export type ServiceHours = {
  mon: {
    openPeriodType: OpenPeriodType;
    periods: Array<Period>;
  };
  tue: {
    openPeriodType: OpenPeriodType;
    periods: Array<Period>;
  };
  wed: {
    openPeriodType: OpenPeriodType;
    periods: Array<Period>;
  };
  thu: {
    openPeriodType: OpenPeriodType;
    periods: Array<Period>;
  };
  fri: {
    openPeriodType: OpenPeriodType;
    periods: Array<Period>;
  };
  sat: {
    openPeriodType: OpenPeriodType;
    periods: Array<Period>;
  };
  sun: {
    openPeriodType: OpenPeriodType;
    periods: Array<Period>;
  };
};

export type SellingTime = {
  startTime: string; // '2022-03-01 10:00:00'
  endTime: string; // '2025-01-21 22:00:00'
  id: string;
  name: string;
  serviceHours: ServiceHours;
};

export type NameTranslation = {
  en?: string;
  th?: string;
  ms?: string;
  zh?: string;
  vi?: string;
  id?: string;
  km?: string;
  my?: string;
};
export enum AvailableStatus {
  'AVAILABLE' = 'AVAILABLE',
  'UNAVAILABLE' = 'UNAVAILABLE',
  'HIDE' = 'HIDE',
}
export type AdvancedPricing = {
  Delivery_OnDemand_GrabApp: number;
  Delivery_Scheduled_GrabApp: number;
  SelfPickUp_OnDemand_GrabApp: number;
  DineIn_OnDemand_GrabApp: number;
  Delivery_OnDemand_StoreFront: number;
  Delivery_Scheduled_StoreFront: number;
  SelfPickUp_OnDemand_StoreFront: number;
};
export type Modifier = {
  id: string;
  name: string;
  nameTranslation: NameTranslation;
  availableStatus: AvailableStatus;
  price: number;
  barcode: string;
  advancedPricing?: AdvancedPricing;
};

export type ModifierGroup = {
  id: string;
  name: string;
  nameTranslation?: NameTranslation;
  availableStatus: AvailableStatus;
  selectionRangeMin: number;
  selectionRangeMax: number;
  modifiers: Array<Modifier>;
};

export type Item = {
  id: string;
  name: string;
  nameTranslation?: NameTranslation;
  availableStatus: AvailableStatus;
  description?: string;
  descriptionTranslation?: NameTranslation;
  price: number;
  photos?: Array<string>;
  specialType?: Nullable<string>;
  taxable?: boolean;
  barcode?: string;
  sellingTimeID: string;
  maxStock: number;
  advancedPricing?: AdvancedPricing;
  purchasability?: {
    Delivery_OnDemand_GrabApp: boolean;
    Delivery_Scheduled_GrabApp: boolean;
    SelfPickUp_OnDemand_GrabApp: boolean;
    DineIn_OnDemand_GrabApp: boolean;
    Delivery_OnDemand_StoreFront: boolean;
    Delivery_Scheduled_StoreFront: boolean;
    SelfPickUp_OnDemand_StoreFront: boolean;
  };
  modifierGroups: Array<ModifierGroup>;
};
export type Category = {
  id: string;
  name: string;
  nameTranslation?: NameTranslation;
  availableStatus: AvailableStatus;
  sellingTimeID?: string;
  items: Array<Item>;
};

export type Menu = {
  merchantID: string;
  partnerMerchantID: string;
  currency: Currency;
  sellingTimes: Array<SellingTime>;
  categories: Array<Category>;
};
