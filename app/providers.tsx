'use client';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';

import { chains, rainbowConfig, wagmiConfig } from '@/configs/wallet';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider {...rainbowConfig}>{children}</RainbowKitProvider>
    </WagmiConfig>
  );
}
