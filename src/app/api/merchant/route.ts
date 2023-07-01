import { NextResponse } from 'next/server';

import { merchantsList } from '~/__generated__/mock-data/merchants';
import { Merchant } from '~/domains/menu/entity';

export async function GET(
  _request: Request,
): Promise<NextResponse<{ merchants: Array<Merchant> }>> {
  return NextResponse.json({ merchants: merchantsList });
}
