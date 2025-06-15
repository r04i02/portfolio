/** @jsxImportSource @emotion/react */
import { SkillCard } from './skillcard';
import { styles } from './styles';

export function ShowSkillCard(){
  return (
    <div css={styles.grid}>
        <h2>技術スタック</h2>
        <SkillCard name="c++" logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" level={3} />
        <SkillCard name="python" logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" level={1} />
        <SkillCard name="typescript" logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" level={1} />
    </div>
  )
}