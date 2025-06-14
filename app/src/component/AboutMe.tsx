/** @jsxImportSource @emotion/react */
import { styles } from './styles';

// コンポーネント定義
export function AboutMe() {
  return (
    <div>
      <h2 css={styles.heading}>About Me</h2>
      <li css={styles.paragraph}>鈴鹿工業高等専門学校 本科4年</li>
      <li css={styles.paragraph}>電子情報工学科</li>
    </div>
  )
}