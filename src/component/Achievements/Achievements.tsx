/** @jsxImportSource @emotion/react */
import { CardGrid } from './GridAchievement';
import { styles } from '../SkillCard/styles';

export function ShowAchievement(){
    return(
        <div css={styles.grid}>
            <h2>実績</h2>

            <CardGrid
                columns = {2}
                cards={[
                    {
                        imageUrl: './../../../public/image1.jpg',
                        linkUrl: 'https://www.procon.gr.jp/?page_id=79774',
                        description: 'procon35競技部門「static programming」'
                    },
                    {
                        imageUrl: './../../../public/image0.jpg',
                        linkUrl: 'https://pckoshien.u-aizu.ac.jp/' ,
                        description: 'パソコン甲子園2024「チーム名」'
                    },
                ]}
            />

        </div>
    )
}