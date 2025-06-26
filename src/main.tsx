/** @jsxImportSource @emotion/react */
import { createRoot } from 'react-dom/client'
import { Global, css } from '@emotion/react'
import { styles } from './component/AboutMe/styles';

import { AboutMe } from './component/AboutMe/AboutMe';
import { MyName } from './component/MyName/MyName';
import { ShowSkillCard } from './component/SkillCard/showSkillCard';
import { ShowAchievement } from './component/Achievements/Achievements';

createRoot(document.getElementById('root')!).render(
  <App />
)

function App() {
  return (
    <>
      {/* グローバルスタイルで html/body の余白をリセット */}
      <Global
        styles={css`
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
          }

          #root {
            height: 100%;
          }
        `}
      />

      <div css={styles.container}>
        <div css={styles.card}>
          <MyName />
        </div>
        <div css={styles.card}>
          <AboutMe />
          <ShowSkillCard />
          <ShowAchievement />
        </div> 
      </div>
    </>
  )
}