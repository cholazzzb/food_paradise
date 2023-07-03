import { NextResponse } from 'next/server';

import { merchantsMenuItem } from '~/__generated__/mock-data/merchants';
import { type GetMenuItemRes } from '~/domains/menu/contract';
import {
  InternalServerErrorRes,
  internalServerErrorRes,
} from '~/shared/server';

export async function GET(
  _request: Request,
  { params }: { params: { menuID: string } },
): Promise<NextResponse<GetMenuItemRes | InternalServerErrorRes>> {
  const menuID = params.menuID;
  const menuItem = merchantsMenuItem[menuID];

  if (!menuItem) {
    return NextResponse.json(internalServerErrorRes, { status: 500 });
  }

  return NextResponse.json({ menuItem }, { status: 200 });
}
