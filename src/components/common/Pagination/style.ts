import styled from 'styled-components';

export const PageButtonList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 8px;
`;

export const PageButton = styled.button<{ $isSelected: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 24px;
    height: 24px;
    padding: 10px;
    border-radius: 50%;

    background-color: ${(props) => (props.$isSelected ? '#F0F4F7' : '#ffffff')};

    &:disabled {
        background-color: #e2e2e2;
    }
`;
