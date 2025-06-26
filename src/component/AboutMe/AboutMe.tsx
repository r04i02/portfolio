/** @jsxImportSource @emotion/react */
import { styles } from './styles';

// コンポーネント定義
export function AboutMe() {
  return (
    <div>
      <h2 css={styles.heading}>About Me</h2>
      <li css={styles.paragraph}>鈴鹿工業高等専門学校 本科4年</li>
      <li css={styles.paragraph}>電子情報工学科</li>
      <h2 css={styles.heading}>興味</h2>
      <p css={styles.paragraph}>
        C++やPythonを用いた競技プログラミング、Web開発、AI技術に興味があります。<br />
        特に、C++を使用したアルゴリズムの最適化や、Pythonを用いたデータ解析に情熱を持っています。
      </p>
    </div>
  )
}