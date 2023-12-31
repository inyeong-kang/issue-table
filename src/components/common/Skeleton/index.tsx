import { CSSProperties } from 'react';
import * as S from './style';

export default function Skeleton({ styles }: { styles?: CSSProperties }) {
    return (
        <S.Container style={styles}>
            <S.FirstBox />
            <S.SecondBox />
            <S.ThirdBox />
        </S.Container>
    );
}
