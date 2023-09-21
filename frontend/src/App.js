import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";
import { Inventory } from "scenes/inventory";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/hair" element={<Products />} />
              <Route path="/makeup" element={<Products />} />
              <Route path="/nails" element={<Products />} />
              <Route path="/facials" element={<Products />} />
              <Route path="/inventory" element={<Inventory />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>  
    </div>
  );
}

export default App;


//cooment