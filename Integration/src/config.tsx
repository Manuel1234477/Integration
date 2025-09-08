import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
//   RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

import {
  sepolia,
  baseSepolia,
  base,
} from 'wagmi/chains';




export const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [sepolia, baseSepolia, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});