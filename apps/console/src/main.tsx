import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router';

import { MantineProvider } from '@mantine/core';

import { lightTheme } from './themes/light/light.theme';

import '@mantine/core/styles.layer.css';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <MantineProvider theme={lightTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
    {/* </Provider> */}
  </StrictMode>
);
