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
      /* 背景を public/IMG_4039.jpgにする */
      background-image: url('/IMG_4039.jpg');
      background-size: cover;
      background-attachment: fixed;
      background-position: center;
      filter: blur(4px);
      z-index: -1;
    }
  `,

  card: css`
    background-color: #00000088;
    padding: 40px;
    padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 12px;
    max-width: 800px;
    width: 90%;
    color: #ffffff;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    gap: 16px;

    /* レスポンシブ調整 */
    @media (max-width: 768px) {
      padding: 24px;
      border-radius: 10px;
      max-width: 95%;
    }

    @media (max-width: 480px) {
      padding: 16px;
      gap: 12px;
    }
  `,

  heading: css`
    font-size: 24px;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }
  `,

  paragraph: css`
    margin: 8px 0;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 15px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  `,
};