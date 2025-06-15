// styles.ts
import { css } from '@emotion/react';

export const styles = {
  container: css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 32px;
    padding-bottom: 32px;
    align-items: center;
    gap: 24px;
    min-height: 100vh;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('./../../public/IMG_4039.jpg');
      background-size: cover;
      background-attachment: fixed;
      background-position: center;
      filter: blur(4px);
      z-index: -1;
    }
  `,
  card: css`
    background-color: #00000088;
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
