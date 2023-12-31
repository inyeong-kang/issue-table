import React, { CSSProperties } from 'react';
import styled from 'styled-components';

interface Props {
    className?: string;
    styles?: CSSProperties;
}

export const TableBody = ({ className, children }: React.PropsWithChildren<Props>) => {
    return <Body className={className}>{children}</Body>;
};

export const TableRow = ({ children, className, styles }: React.PropsWithChildren<Props>) => {
    return (
        <tr className={className} style={styles}>
            {children}
        </tr>
    );
};

export const TableCell = ({ children, className, styles }: React.PropsWithChildren<Props>) => {
    return (
        <Cell className={className} style={styles}>
            {children}
        </Cell>
    );
};

const Body = styled.tbody`
    font: var(--text-body);
`;

const Cell = styled.td`
    white-space: nowrap; /* 텍스트가 한 줄로 표시되도록 설정합니다. */
    overflow: hidden; /* 너비를 초과하는 텍스트를 숨깁니다. */
    text-overflow: ellipsis; /* 말줄임표를 추가합니다. */
    max-width: 400px;
    min-width: 50px;
    padding: 8px; /* 셀 내부에 여백을 설정합니다. */
`;
