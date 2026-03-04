import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from '@/app/store';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>,
  );
} else {
  throw new Error('Could not find root element');
}


