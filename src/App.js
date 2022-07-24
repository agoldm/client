import './App.css';
import Routers from './Routers';

import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import cacheRtl from "./theme/cacheRtl";
import ContextProvider from './context/ContextProvider';


function App() {
  return (
    <ContextProvider>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routers />
        </ThemeProvider>
      </CacheProvider>
    </ContextProvider>
  );
}

export default App;
