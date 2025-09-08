import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from './config.tsx';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
    <App />
          {/* Your App */}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>,
)