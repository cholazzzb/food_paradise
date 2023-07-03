import { NextResponse } from 'next/server';

import { merchants } from '~/__generated__/mock-data/merchants';
import { Menu } from '~/domains/menu/entity';

export async function GET(request: Request): Promise<
  NextResponse<
    | {
        menu: Menu;
      }
    | { message: string }
  >
> {
  const merchantID = request.headers.get('Merchant-Id');
  if (!merchantID) {
    return NextResponse.json(
      { message: `merchantID is required` },
      { status: 400 },
    );
  }

  const menu = merchants[merchantID];
  if (!menu) {
    return NextResponse.json(
      { message: `merchantID ${merchantID} not found` },
      { status: 500 },
    );
  }

  return NextResponse.json({ menu }, { status: 200 });
}
