import { css } from '@emotion/react';

export const styles = {
// styles.grid を以下のように変更
    grid: css`
    display: flex;
    flex-direction: column;
    gap: 16px; // これでカード間にスペース
    `,
  card: css`
    background: rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 16px;
    font-family: sans-serif;
    color: #ffffff;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.2s ease;
    width: 100%;
    box-sizing: border-box;

    &:hover {
      transform: translateY(-4px);
    }
  `,

  header: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  `,

  name: css`
    font-size: 18px;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,

  logo: css`
    width: 24px;
    height: 24px;
    object-fit: contain;
  `,

  progressBar: css`
    margin-top: 8px;
  `,

  barBackground: css`
    width: 100%;
    height: 10px;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 5px;
    overflow: hidden;
  `,

  barFill: (percentage: number) => css`
    width: ${percentage}%;
    height: 100%;
    background-color: #00bcd4;
    transition: width 0.3s ease;
  `,
};
