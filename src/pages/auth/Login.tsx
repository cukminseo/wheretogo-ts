/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";

const Login = () => {
  return <div css={titleCSS}>로그인 페이지 채팅</div>;
};

export default Login;

const titleCSS = (theme: Theme) => css`
  ${theme.typography.body2}
  color: ${theme.color.main};
`;
