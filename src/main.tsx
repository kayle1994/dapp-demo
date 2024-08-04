import React from 'react';
import ReactDOM from 'react-dom/client';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base, sepolia } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.tsx';
import { PROJECT_ID } from '@constants/config';

import '@rainbow-me/rainbowkit/styles.css';
import './index.scss';

const config = getDefaultConfig({
  appName: 'Dapp Demo',
  projectId: PROJECT_ID,
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
);
