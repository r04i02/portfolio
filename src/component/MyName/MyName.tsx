/** @jsxImportSource @emotion/react */
import { styles } from '../AboutMe/styles';
import { AccountCard } from './AccountCard';

export function MyName() {
  return (
    <div>
      <h1 css={styles.heading}>igasa_K</h1>
      <AccountCard
        service="Twitter"
        username="@igasa_kpro"
        logo="https://img.icons8.com/color/48/twitter--v1.png"
        textColor="#FFFFFF"
        bgColor="#1DA1F220"
        url="https://twitter.com/igasa_kpro"
      />
      <AccountCard
        service="GitHub"
        username="@igasa-K"
        /* /Users/igasa_k/webDevelopment/portfolio/app/src/component/github-mark/github-mark-white.svgを参照 */
        logo="./github-mark/github-mark-white.svg" 
        textColor="#FFFFFF"
        bgColor="#00000040"
        url="https://github.com/r04i02"
      />
      <AccountCard
        service="AtCoder"
        username="igasa_K"
        logo="https://img.atcoder.jp/logo/atcoder/logo_transparent.png"
        textColor="#000000"
        bgColor="#FFFFFF99"
        url="https://atcoder.jp/users/igasa_K"
      />
    </div>
  )
}
