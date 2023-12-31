import styled from 'styled-components';

export const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    margin: 72px 60px;
    max-width: 1440px;

    border-top: 1px solid #e2e2e2;
    padding-top: 32px;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    gap: 24px;
`;

export const PageTitle = styled.h1`
    font: var(--text-page-title);
`;

export const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    width: 100%;
    min-height: 100vh;
`;

export const SkeletonWrapper = styled.div`
    width: 900px;
`;
