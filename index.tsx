import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';
import Sidebar from '@mui/material/Sidebar';
import { BottomNavigation } from '@mui/material';
ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <div></div>
      <Demo />
      <BottomNavigation />
      <div></div>
    </StyledEngineProvider>
  </React.StrictMode>
);
