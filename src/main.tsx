import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';
import '@/index.css';
import '@mantine/core/styles.css'; // ✅ MUST HAVE (Mantine v8)
import App from '@/App.tsx';

const root = createRoot(document.getElementById('root')!);

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  headings: {
    fontFamily: 'Anton, sans-serif',
    fontWeight: '400',

    sizes: {
      h1: {
        fontSize: 'clamp(2.2rem, 5vw, 5rem)',
        lineHeight: '1.2',
      },
    },
  },
});

root.render(
  <StrictMode>
    <ColorSchemeScript />
    <MantineProvider theme={theme} defaultColorScheme="light">
      <App />
    </MantineProvider>
  </StrictMode>,
);
