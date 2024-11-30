import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';

import { MantineProvider } from '@mantine/core';

import { AppRouteResolver } from './AppRouteResolver';

import { lightTheme } from '../themes/light/light.theme';
import { store } from './_config/store/store.config';

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MantineProvider theme={lightTheme}>
          <AppRouteResolver />
        </MantineProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
