import { CSSProperties } from 'react';
import { FallbackProps } from 'react-error-boundary';
import styled from 'styled-components';

interface Props extends FallbackProps {
    onClick?: () => void;
    styles?: CSSProperties;
}

export default function ErrorFallback({ onClick, styles }: Props) {
    return (
        <Wrapper style={styles}>
            <h4>데이터를 불러오는 중 오류가 발생했어요.</h4>
            <MainButton onClick={onClick}>새로고침하기</MainButton>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4 {
        font: var(--text-body);
    }
`;

const Button = styled.button`
    background-color: var(--primary-color);
    color: var(--white);
    padding: 8px 12px;
    border-radius: 8px;

    cursor: pointer;
`;

const MainButton = styled(Button)`
    background-color: var(--primary-color);
    color: var(--white);
`;
