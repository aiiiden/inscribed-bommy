import {
  RainbowKitProvider,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import {
  metaMaskWallet,
  okxWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig } from 'wagmi';
import { linea, lineaTestnet } from 'wagmi/chains';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';

export const { chains, publicClient } = configureChains(
  [linea, lineaTestnet],
  [
    infuraProvider({
      apiKey: '0635459c0438461ea1bde424407fbd43',
    }),
    publicProvider(),
  ],
);

export const projectId = '23da2f651da10b94d4e50123853acfb7';

export const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({
        chains,
        projectId,
      }),
      walletConnectWallet({
        chains,
        projectId,
        version: '2',
      }),
      okxWallet({
        chains,
        projectId,
      }),
    ],
  },
]);

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

type RainbowConfig = Parameters<typeof RainbowKitProvider>[0];

export const rainbowConfig: Omit<RainbowConfig, 'children'> = {
  chains,
  appInfo: {
    appName: 'Inscribed Bommy',
  },
  locale: 'en',
  modalSize: 'compact',
};
