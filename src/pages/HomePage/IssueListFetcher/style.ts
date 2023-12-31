import styled from 'styled-components';

export const FilterChipContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-bottom: 24px;
`;

export const StateChipContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 8px;

    width: 100%;

    margin-bottom: 24px;
`;

export const SortListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: space-between;
    gap: 15px;
`;

export const SortBox = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 40px;

    span {
        font: var(--text-body);
    }
    img {
        width: 20px;
        height: 20px;
    }
`;
