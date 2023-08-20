/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Container } from "../../components/Container";
import "./BottomNav.css";
import { Link } from "react-router-dom";

const BottomNav = () => {
  // 현재 선택된 아이콘을 관리하는 state
  const [activeNav, setActiveNav] = useState(1);
  return (
    <nav className="wrapper" css={Container}>
      <Link
        to="/customer" //추후 변경예정
        className="nav-link"
        onClick={() => setActiveNav(1)}
      >
        <div className={activeNav === 1 ? "nav-item active" : "nav-item"}>
          Favorites
        </div>
      </Link>
      <Link to="/customer" className="nav-link" onClick={() => setActiveNav(2)}>
        <div className={activeNav === 2 ? "nav-item active" : "nav-item"}>
          Mainpage
        </div>
      </Link>
      <Link
        to="/customer/mypage"
        className="nav-link"
        onClick={() => setActiveNav(3)}
      >
        <div className={activeNav === 3 ? "nav-item active" : "nav-item"}>
          Mypage
        </div>
      </Link>
    </nav>
  );
};

export default BottomNav;
