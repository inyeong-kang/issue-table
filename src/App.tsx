import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/styles/globalStyle';
import { theme } from '@/styles/theme';

import router from './routes/router';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <RouterProvider router={router} />
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
