import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/styles/globalStyle';
import { theme } from '@/styles/theme';

import router from './routes/router';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <RouterProvider router={router} />
            </ThemeProvider>
        </>
    );
}

export default App;
