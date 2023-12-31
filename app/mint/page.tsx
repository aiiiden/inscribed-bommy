'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { lineaTestnet } from 'viem/chains';
import { useAccount, useSendTransaction } from 'wagmi';

import { Button, buttonVariants } from '@/components/ui/button';

export default function MintPage() {
  const { address } = useAccount();
  const { sendTransactionAsync } = useSendTransaction();

  const uint8ToHex = (uint8arr: Uint8Array) => {
    let hexStr = '';
    for (let i = 0; i < uint8arr.length; i++) {
      let hex = uint8arr[i].toString(16);
      hex = hex.length === 1 ? '0' + hex : hex;
      hexStr += hex;
    }
    return ('0x' + hexStr) as `0x${string}`;
  };

  const encode = (data: string) => {
    const encoder = new TextEncoder();
    const view = encoder.encode(data);
    return uint8ToHex(view);
  };

  const mint = async () => {
    if (!address) return;

    const data = encode(
      JSON.stringify({
        p: 'bomm-20',
        op: 'mint',
        tick: 'bommy',
        amt: '1',
      }),
    );
    const tx = await sendTransactionAsync({
      to: address,
      data,
      chainId: lineaTestnet.id,
    });
    console.log(tx);
  };

  return (
    <main className="py-10">
      <h2 className="mb-10 text-wrap text-center text-3xl font-extrabold uppercase">
        Mint
        <em className="mx-1 inline-block rounded-md bg-black/10 p-1 not-italic">
          $BOMMY
        </em>
      </h2>

      <div className="flex flex-col gap-6">
        <div>
          <p>Deployed on...</p>
          <Link
            className={buttonVariants({ variant: 'link' })}
            href="https://goerli.lineascan.build/tx/0x0d678857a1f3379c99ddaf0e40694566eccb6ff435851949731974ae7b83a28c"
          >
            0x0d678857a1f3379c99ddaf0e40694566eccb6ff435851949731974ae7b83a28c
          </Link>
        </div>
        <div>
          <p>Please connect wallet</p>
          <ConnectButton
            label="Connect Wallet"
            chainStatus={'none'}
            showBalance={false}
            accountStatus={'full'}
          />
        </div>
        <div>
          <p>Mint 1 $BOMMY</p>
          <Button onClick={mint}>Mint</Button>
        </div>
        <div>
          <p>You have...</p>
          <p>1 $BOMMY</p>
        </div>
      </div>
    </main>
  );
}
