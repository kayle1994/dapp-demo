import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import './App.scss';

const App:React.FC = () => {
  return (
    <div className="dapp">
      <ConnectButton />
    </div>
  );
};

export default App;
