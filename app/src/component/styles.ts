// styles.ts
import { css } from '@emotion/react';

export const styles = {
  container: css`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 32px; /* 上方向の padding */
    align-items: center;
    background: #000000;
    gap: 24px;
  `,
  card: css`
    background-color: #222222;
    padding: 40px;         /* 全方向の基本 padding */
    padding-top: 16px;     /* ← 上方向だけ小さくする */
    padding-bottom: 16px;  /* ← 下方向だけ小さくする */
    border-radius: 12px;
    max-width: 800px;
    width: 90%;
    color: #ffffff;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  heading: css`
    font-size: 24px;
    margin-bottom: 16px;
  `,
  paragraph: css`
    margin: 8px 0;
  `,
};
