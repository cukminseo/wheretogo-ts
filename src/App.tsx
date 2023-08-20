/** @jsxImportSource @emotion/react */
import { Global } from "@emotion/react";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "./components/Container";
import CustomerMain from "./pages/customer/main/customerMain";
import OwnerMain from "./pages/owner/main/ownerMain";
import Login from "./pages/user/Login";
import Signin from "./pages/user/Signin";
import CustomerMypage from "./pages/customer/mypage/customerMypage";
import OwnerMypage from "./pages/owner/mypage/ownerMypage";

function App() {
  return (
    <div css={Container}>
      <BrowserRouter>
        <Global styles={GlobalStyle} />
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
  );
}

export default App;
