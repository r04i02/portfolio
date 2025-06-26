/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { HoverImageCard } from './AchievementCard'; // 先ほどのカードをインポート

type CardData = {
  imageUrl: string;
  linkUrl: string;
  description: string;
};

type Props = {
  cards: CardData[];
  columns: number; // n列にしたい数
};

export const CardGrid: React.FC<Props> = ({ cards, columns }) => {
  return (
    <div css={gridStyle(columns)}>
      {cards.map((card, i) => (
        <HoverImageCard
          key={i}
          imageUrl={card.imageUrl}
          linkUrl={card.linkUrl}
          description={card.description}
        />
      ))}
    </div>
  );
};

const gridStyle = (columns: number) => css`
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  gap: 16px;
  padding: 16px;
`;
