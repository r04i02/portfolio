/** @jsxImportSource @emotion/react */
import { CardGrid } from './GridAchievement';
import { styles } from '../SkillCard/styles';

import proconImage from './../../../public/image1.jpg';
import pckoImage from './../../../public/image0.jpg';

export function ShowAchievement(){
    return(
        <div css={styles.grid}>
            <h2>実績</h2>

            <CardGrid
                columns = {2}
                cards={[
                    {
                        imageUrl: proconImage,
                        linkUrl: 'https://www.procon.gr.jp/?page_id=79774',
                        description: 'procon35競技部門「static programming」'
                    },
                    {
                        imageUrl: pckoImage,
                        linkUrl: 'https://pckoshien.u-aizu.ac.jp/' ,
                        description: 'パソコン甲子園2024「チーム名」'
                    },
                ]}
            />

        </div>
    )
}