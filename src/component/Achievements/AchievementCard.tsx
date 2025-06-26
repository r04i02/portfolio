/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type Props = {
  imageUrl: string;
  linkUrl: string;
  description: string;
};

export const HoverImageCard: React.FC<Props> = ({ imageUrl, linkUrl, description }) => {
  return (
    <a href={linkUrl} css={cardStyle} target="_blank" rel="noopener noreferrer">
      <div css={backgroundStyle(imageUrl)} />
      <div className="overlay" css={overlayStyle}>
        <p css={descriptionStyle}>{description}</p>
      </div>
    </a>
  );
};

const cardStyle = css`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover .overlay {
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), transparent);
  }
`;

const backgroundStyle = (imageUrl: string) => css`
  background-image: url(${imageUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;

  ${cardStyle}:hover & {
    transform: translateY(-4px);
  }
`;

const overlayStyle = css`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  display: flex;
  align-items: flex-end;
  padding: 12px;
  font-size: 14px;
  line-height: 1.4;
  pointer-events: none;
  transition:
    height 0.3s ease,
    background 0.3s ease;
`;


const descriptionStyle = css`
    color: white;
    font-size: 16px;
    line-height: 0.75;
`;