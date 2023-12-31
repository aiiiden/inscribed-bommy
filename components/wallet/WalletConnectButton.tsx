'use client';

import { useAccountModal } from '@rainbow-me/rainbowkit';

import { Button } from '@/components/ui/button';

export default function WalletConnectButton() {
  const { openAccountModal } = useAccountModal();

  return (
    <Button
      variant={'default'}
      size={'lg'}
      onClick={() => {
        openAccountModal?.();
      }}
    >
      Connect Wallet
    </Button>
  );
}
