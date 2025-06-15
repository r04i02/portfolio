/** @jsxImportSource @emotion/react */
import { styles } from './styles';

type Props = {
  name: string;
  logo: string;
  level: number; // 0〜maxLevel
  maxLevel?: number;
};

export function SkillCard({ name, logo, level, maxLevel = 4 }: Props) {
  const percentage = Math.min(100, (level / maxLevel) * 100);
  return (
    <div css={styles.card}>
      <div css={styles.header}>
        <span css={styles.name}>{name}</span>
        <img src={logo} alt={name} css={styles.logo} />
      </div>
      <div css={styles.progressBar}>
        <div css={styles.barBackground}>
          <div css={styles.barFill(percentage)} />
        </div>
      </div>
    </div>
  );
}
