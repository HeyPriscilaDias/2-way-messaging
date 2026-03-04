import type { Preview } from '@storybook/react-vite';
import React from 'react';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { theme } from '../src/theme/createWillowTheme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => React.createElement(CssVarsProvider,
      { theme },
      React.createElement(CssBaseline),
      React.createElement(Box,
        { sx: { maxWidth: '800px', margin: '0 auto', width: '100%' } },
        React.createElement(Story)
      )
    ),
  ],
};

export default preview;