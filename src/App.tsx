/** @jsxImportSource @emotion/react */
import { Global, ThemeProvider, css } from "@emotion/react";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerMain from "./pages/customer/main/customerMain";
import OwnerMain from "./pages/owner/main/ownerMain";
import Login from "./pages/auth/Login";
import Signin from "./pages/auth/Signin";
import CustomerMypage from "./pages/customer/mypage/customerMypage";
import OwnerMypage from "./pages/owner/mypage/ownerMypage";
import { theme } from "./styles/theme";

const containerCSS = css`
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
  box-sizing: border-box;
  border: 1px solid #ccc;
  padding: 0 1.25rem;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <div css={containerCSS}>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signin" element={<Signin />} />

              <Route path="/customer" element={<CustomerMain />} />
              <Route path="/customer/mypage" element={<CustomerMypage />} />

              <Route path="/owner" element={<OwnerMain />} />
              <Route path="/owner/mypage" element={<OwnerMypage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
