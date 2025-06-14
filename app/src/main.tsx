/** @jsxImportSource @emotion/react */
import { createRoot } from 'react-dom/client'
import { styles } from './component/styles';


import { AboutMe } from './component/AboutMe';
import { MyName } from './component/MyName';

// メインのレンダリング
createRoot(document.getElementById('root')!).render(
  <App />
)

// アプリ全体
function App() {
  return (
    <div>
      <div css={styles.container}>
        <div css={styles.card}>
          <MyName />
        </div>
        <div css={styles.card}>
          <AboutMe />
        </div> 
      </div>
    </div>
  )
}


