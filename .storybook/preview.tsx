import React from 'react';
import type { Preview } from '@storybook/react';
import { GlobalStyle } from '../src/styles/globalStyle';

import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <GlobalStyle />
                    <Story />
                </QueryClientProvider>
            </BrowserRouter>
        ),
    ],
};

export default preview;
