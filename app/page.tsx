'use server';

import Link from 'next/link';

import BommyFace from '@/components/shared/bommy-face';
import { buttonVariants } from '@/components/ui/button';
import WalletConnectButton from '@/components/wallet/WalletConnectButton';

export default async function Home() {
  const dataFormat = {
    p: 'bomm-20',
    op: 'mint',
    tick: 'bommy',
    amt: '1',
  };

  return (
    <main className="py-10">
      <h2 className="mb-10 text-wrap text-center text-3xl font-extrabold uppercase">
        Get{' '}
        <em className="inline-block rounded-md bg-black/10 p-1 not-italic">
          $BOMMY
        </em>{' '}
        for fun
      </h2>
      <div className="flex flex-col items-center justify-center gap-10 sm:flex-row">
        <code className="block w-fit whitespace-pre rounded-xl bg-gray-900 p-4 text-sm leading-tight text-white">
          {JSON.stringify(dataFormat, null, 1)}
        </code>
        <div>➡️</div>
        <div
          role="img"
          className="flex aspect-square w-36 shrink-0 flex-col items-center justify-center gap-2 rounded-full border border-black"
        >
          <BommyFace size={54 * 1.5} />
          <p className="text-center font-mono text-xs font-bold">
            BOMM-20
            <br />
            $BOMMY
          </p>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Link className={buttonVariants({ size: 'lg' })} href="/mint">
          Mint
        </Link>
      </div>
    </main>
  );
}
