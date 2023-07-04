import {
  OpenPeriodType,
  SellingTime,
  ServiceHours,
} from '../../src/domains/menu/entity';
import { generateRandomID } from '../../src/shared/random';

function generateServiceHours(): ServiceHours {
  return {
    mon: {
      openPeriodType: OpenPeriodType.OpenPeriod,
      periods: [
        {
          startTime: '11:30',
          endTime: '14:00',
        },
      ],
    },
    tue: {
      openPeriodType: OpenPeriodType.OpenPeriod,
      periods: [
        {
          startTime: '11:30',
          endTime: '14:00',
        },
      ],
    },
    wed: {
      openPeriodType: OpenPeriodType.OpenPeriod,
      periods: [
        {
          startTime: '11:30',
          endTime: '14:00',
        },
      ],
    },
    thu: {
      openPeriodType: OpenPeriodType.OpenPeriod,
      periods: [
        {
          startTime: '11:30',
          endTime: '14:00',
        },
      ],
    },
    fri: {
      openPeriodType: OpenPeriodType.OpenPeriod,
      periods: [
        {
          startTime: '11:30',
          endTime: '14:00',
        },
      ],
    },
    sat: {
      openPeriodType: OpenPeriodType.OpenPeriod,
      periods: [
        {
          startTime: '11:30',
          endTime: '14:00',
        },
      ],
    },
    sun: {
      openPeriodType: OpenPeriodType.OpenPeriod,
      periods: [
        {
          startTime: '11:30',
          endTime: '14:00',
        },
      ],
    },
  };
}
export function generateSellingTimes(): SellingTime {
  return {
    startTime: '2022-03-01 10:00:00',
    endTime: '2025-01-21 22:00:00',
    id: generateRandomID(),
    name: 'sellingTimeName',
    serviceHours: generateServiceHours(),
  };
}
