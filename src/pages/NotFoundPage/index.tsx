import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <MainWrapper>
            <h1> 404 Not Found</h1>
            <h2>요청하신 페이지를 찾을 수 없어요.</h2>
            <ButtonContainer>
                <MainButton onClick={() => navigate(PATH.HOME)}>홈으로 가기</MainButton>
                <SecondaryButton onClick={() => navigate(-1)}>이전 페이지로</SecondaryButton>
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
