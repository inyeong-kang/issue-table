import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { PATH } from '@/constants/path';

const DOCS = 'https://zrr.kr/srtl';

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <MainWrapper>
            <h1>Spacewalk Front-end Assignment</h1>
            <h2>강인영</h2>
            <ButtonContainer>
                <MainButton onClick={() => navigate(PATH.HOME)}>홈으로 가기</MainButton>
                <SecondaryButton onClick={() => window.open(DOCS)}>문서 보러 가기</SecondaryButton>
            </ButtonContainer>
        </MainWrapper>
    );
}

const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    margin: 120px auto;

    h1 {
        font: var(--text-page-title);
    }

    h2 {
        font: var(--text-title);
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
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

const SecondaryButton = styled(Button)`
    color: var(--primary-color);
    background-color: var(--white);
    border: 1px solid #1a8cff;
`;
