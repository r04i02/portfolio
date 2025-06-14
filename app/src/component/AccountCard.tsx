/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type Props = {
  service: string;
  username: string;
  logo: string;
  bgColor: string;    // ← 背景色
  textColor: string;  // ← 文字色
  url: string;
};

export function AccountCard({ service, username, logo, bgColor, textColor, url }: Props) {
  return (
    <a css={cardStyle(bgColor, textColor)} href={url} target="_blank" rel="noopener noreferrer">
      <div css={styles.header}>{service}</div>
      <div css={styles.body}>
        <span>{username}</span>
        <img src={logo} alt={service} width={24} height={24} />
      </div>
    </a>
  );
}

function increaseAlpha(hexColor: string, delta: number): string {
  const baseColor = hexColor.slice(0, 7); // 例: "#000000"
  const alphaHex = hexColor.slice(7, 9); // 例: "60"
  const alpha = parseInt(alphaHex || "FF", 16); // 例: 96

  const newAlpha = Math.min(255, alpha + delta); // 上限255
  const newAlphaHex = newAlpha.toString(16).padStart(2, '0').toUpperCase(); // 例: "70"

  return `${baseColor}${newAlphaHex}`; // 例: "#00000070"
}

const cardStyle = (bgColor: string, textColor: string) => css`
  background-color: ${bgColor};
  color: ${textColor};
  padding: 8px 12px;
  border-radius: 4px;
  width: 50%;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  margin: 8px 0;
  text-decoration: none; /* ← 下線を消す */

  &:hover {
    background-color: ${increaseAlpha(bgColor, 0x60)};
    cursor: pointer;
  }
`;


const styles = {
  header: css`
    font-size: 12px;
  `,
  body: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
  `,  
};