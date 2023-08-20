/** @jsxImportSource @emotion/react */
import { Container } from "../../components/Container";
import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";

const Login = () => {
  return (
    <div css={Container}>
      <div css={titleCSS}>로그인 페이지 채팅</div>
    </div>
  );
};

export default Login;

const titleCSS = (theme: Theme) => css`
  ${theme.typography.body2}
  color: ${theme.color.main};
`;
