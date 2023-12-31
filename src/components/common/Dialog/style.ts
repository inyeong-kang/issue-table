import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const DefaultBackDrop = styled.div`
    z-index: 10;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.35);
`;

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 420px;
    height: auto;
    max-width: 290px;
    border-radius: 16px;
    border: 2px solid #f6f6f6;

    background-color: white;

    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);
    z-index: 20;
`;

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;

    font-size: 20px;
    font-weight: 600;
`;

export const BodyWrapper = styled.div`
    height: 50%;
`;

export const CloseButton = styled.button`
    background-color: #ffffff;
    border: none;

    margin: 10px 5px;
    cursor: pointer;
    font-size: 17px;
`;

export const MainButton = styled.button`
    color: #ffffff;
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #f2f2f2;

    background-color: #1a8cff;

    width: 96%;
    height: 50px;

    font-size: 16px;
    letter-spacing: 2px;
`;

export const Secondary = styled(MainButton)`
    width: 45%;
    height: 45px;
    margin-top: 3px;

    color: ${theme.mainColor};
    background-color: #ffffff;
    border: 1px solid ${theme.mainColor};

    &:hover {
        background-color: #f2f2f2;
    }
`;
